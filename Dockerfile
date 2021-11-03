
ARG GO_VERSION=1.16
FROM golang:${GO_VERSION}-alpine AS dev

ENV APP_NAME="todo-project" \
    APP_PATH="/var/app"

ENV APP_BUILD_NAME="${APP_NAME}"

COPY . ${APP_PATH}
WORKDIR ${APP_PATH}

ENV GO111MODULE="on" \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOFLAGS="-mod=vendor"

ENTRYPOINT ["sh"]

FROM dev as build

RUN (([ ! -d "${APP_PATH}/vendor" ] && go mod download && go mod vendor) || true)
RUN go build -ldflags="-s -w" -mod vendor -o ${APP_BUILD_NAME}
RUN chmod +x ${APP_BUILD_NAME}

FROM scratch AS prod

ENV APP_BUILD_PATH="/var/app" \
    APP_BUILD_NAME="todo-project" \
    APP_FRONTEND_PATH="/var/app/web" \
    APP_STATIC_PATH="/var/app/static"

WORKDIR ${APP_BUILD_PATH}

COPY --from=build ${APP_BUILD_PATH}/${APP_BUILD_NAME} ${APP_BUILD_PATH}/

COPY ./web/ ${APP_FRONTEND_PATH}
COPY ./static/ ${APP_STATIC_PATH}

ENTRYPOINT ["/var/app/todo-project"]
CMD ""
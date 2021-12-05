
ARG GO_VERSION=1.16
FROM golang:${GO_VERSION}-alpine AS dev

ENV APP_NAME="static_react_server" \
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

FROM debian:10-slim AS prod
RUN apt update -y && apt install -y curl iproute2 ca-certificates && \
    update-ca-certificates

ENV APP_BUILD_PATH="/var/app" \
    APP_BUILD_NAME="static_react_server" \
    APP_FRONTEND_PATH="/var/app/build"
WORKDIR ${APP_BUILD_PATH}

COPY --from=build ${APP_BUILD_PATH}/${APP_BUILD_NAME} ${APP_BUILD_PATH}/
COPY build/. ${APP_FRONTEND_PATH}/
RUN mkdir /var/app/build/static/pv

ENTRYPOINT ["/var/app/static_react_server"]
CMD ""
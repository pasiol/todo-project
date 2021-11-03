# todo-project

[https://github.com/pasiol/todo-project/tree/1.02]

Exercise 1.02

    docker build -t pasiol/todo-project .
    docker push pasiol/todo-project

    pasiol@lab:~$ kubectl create deployment todo-project --image=pasiol/todo-project@sha256:b4b8c31d840f1eae9b02d7ec5defca32afcb8bf56bca7a4ee539baaf1509eed2
    deployment.apps/todo-project created
    pasiol@lab:~$ kubectl get deployments
    NAME           READY   UP-TO-DATE   AVAILABLE   AGE
    log-output     1/1     1            1           9h
    todo-project   1/1     1            1           11s
    pasiol@lab:~$ kubectl get pods
    NAME                            READY   STATUS    RESTARTS   AGE
    log-output-6cb768654c-rz8zg     1/1     Running   0          9h
    todo-project-86bd654c5c-mz29v   1/1     Running   0          20s
    pasiol@lab:~$ kubectl logs todo-project-86bd654c5c-mz29v
    2021/11/03 05:43:48 Server started in port 8000
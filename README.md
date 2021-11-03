# todo-project

[https://github.com/pasiol/todo-project/tree/1.04]

Exercise 1.04

    pasiol@lab:~$ kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.04/manifests/deployment.yaml
    deployment.apps/todo-project created
    pasiol@lab:~$ kubectl get deployments
    NAME           READY   UP-TO-DATE   AVAILABLE   AGE
    log-output     1/1     1            1           24m
    todo-project   1/1     1            1           15s
    pasiol@lab:~$ kubectl get pods
    NAME                            READY   STATUS    RESTARTS   AGE
    log-output-6cb768654c-tnnw5     1/1     Running   0          24m
    todo-project-86bd654c5c-wtcld   1/1     Running   0          25s
    pasiol@lab:~$ kubectl logs todo-project-86bd654c5c-wtcld
    2021/11/03 16:12:34 Server started in port 8000
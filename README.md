# todo-project

[https://github.com/pasiol/todo-project/tree/1.05]

Exercise 1.06

        [https://github.com/pasiol/todo-project/tree/1.08]

        kubectl delete -f https://raw.githubusercontent.com/pasiol/log-output/1.07/manifests/ingress.yaml
        ingress.networking.k8s.io "log-output-ingress" deleted
        kubectl delete -f https://raw.githubusercontent.com/pasiol/log-output/1.07/manifests/service.yaml
        ingress.networking.k8s.io "log-output-ingress" deleted
    
        pasiol@lab:~$ kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.08/manifests/deployment.yaml
        deployment.apps/todo-project unchanged
        pasiol@lab:~$ kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.08/manifests/service.yaml
        service/todo-project-svc configured
        pasiol@lab:~$ kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.08/manifests/ingress.yaml
        ingress.networking.k8s.io/todo-project-ingress created
        pasiol@lab:~$ kubectl get pods
        NAME                            READY   STATUS    RESTARTS   AGE
        todo-project-86bd654c5c-drr9p   1/1     Running   0          54m
        log-output-6897c6f44-q9zfw      1/1     Running   0          31m
        pasiol@lab:~$ kubectl logs todo-project-86bd654c5c-drr9p
        2021/11/15 17:58:22 Server started in port 8000
        pasiol@lab:~$ kubectl get ing
        NAME                   CLASS    HOSTS   ADDRESS                            PORTS   AGE
        todo-project-ingress   <none>   *       172.18.0.2,172.18.0.3,172.18.0.4   80      42s

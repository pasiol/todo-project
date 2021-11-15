# todo-project

[https://github.com/pasiol/todo-project/tree/1.05]

Exercise 1.06

        k3d cluster delete
        INFO[0000] Deleting cluster 'k3s-default'               
        INFO[0000] Deleted k3d-k3s-default-serverlb             
        INFO[0001] Deleted k3d-k3s-default-agent-1              
        INFO[0002] Deleted k3d-k3s-default-agent-0              
        INFO[0002] Deleted k3d-k3s-default-server-0             
        INFO[0002] Deleting cluster network 'k3d-k3s-default'   
        INFO[0002] Deleting image volume 'k3d-k3s-default-images'
        INFO[0002] Removing cluster details from default kubeconfig...
        INFO[0002] Removing standalone kubeconfig file (if there is one)...
        INFO[0002] Successfully deleted cluster k3s-default!
    
        k3d cluster create --port 8082:20080@agent:0 -p 8081:80@loadbalancer --agents 2
        INFO[0000] portmapping '8081:80' targets the loadbalancer: defaulting to [servers:*:proxy agents:*:proxy]
        INFO[0000] Prep: Network                                
        INFO[0000] Created network 'k3d-k3s-default'            
        INFO[0000] Created volume 'k3d-k3s-default-images'      
        INFO[0000] Starting new tools node...                   
        INFO[0000] Starting Node 'k3d-k3s-default-tools'        
        INFO[0001] Creating node 'k3d-k3s-default-server-0'     
        INFO[0001] Creating node 'k3d-k3s-default-agent-0'      
        INFO[0001] Creating node 'k3d-k3s-default-agent-1'      
        INFO[0001] Creating LoadBalancer 'k3d-k3s-default-serverlb'
        INFO[0001] Using the k3d-tools node to gather environment information
        INFO[0001] HostIP: using network gateway...             
        INFO[0001] Starting cluster 'k3s-default'               
        INFO[0001] Starting servers...                          
        INFO[0001] Starting Node 'k3d-k3s-default-server-0'     
        INFO[0001] Deleted k3d-k3s-default-tools                
        INFO[0008] Starting agents...                           
        INFO[0009] Starting Node 'k3d-k3s-default-agent-1'      
        INFO[0009] Starting Node 'k3d-k3s-default-agent-0'      
        INFO[0019] Starting helpers...                          
        INFO[0019] Starting Node 'k3d-k3s-default-serverlb'     
        INFO[0025] Injecting '172.18.0.1 host.k3d.internal' into /etc/hosts of all nodes...
        INFO[0025] Injecting records for host.k3d.internal and for 4 network members into CoreDNS configmap...
        INFO[0026] Cluster 'k3s-default' created successfully!  
        INFO[0027] You can now use it like this:                
        kubectl cluster-info
    
        kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.06/manifests/deployment.yaml
        deployment.apps/todo-project created
        kubectl apply -f https://raw.githubusercontent.com/pasiol/todo-project/1.06/manifests/service.yaml
        service/todo-project-svc created
    
        kubectl describe service todo-project-svc
        Name:                     todo-project-svc
        Namespace:                default
        Labels:                   <none>
        Annotations:              <none>
        Selector:                 app=todo-project
        Type:                     NodePort
        IP Family Policy:         SingleStack
        IP Families:              IPv4
        IP:                       10.43.151.224
        IPs:                      10.43.151.224
        Port:                     http  80/TCP
        TargetPort:               8000/TCP
        NodePort:                 http  30080/TCP
        Endpoints:                10.42.1.3:8000
        Session Affinity:         None
        External Traffic Policy:  Cluster
        Events:                   <none>
    
        kubectl get svc
        NAME               TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
        kubernetes         ClusterIP   10.43.0.1       <none>        443/TCP        27m
        todo-project-svc   NodePort    10.43.151.224   <none>        80:30080/TCP   9m48s
    
    
    ![Screeshot](images/1.06.png)





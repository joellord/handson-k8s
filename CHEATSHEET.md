## Commands CheatSheet

### Pods
```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/1-pod.yaml
kubectl get all
kubectl describe pod/hello
kubectl logs hello
kubectl get pods
kubectl delete pod hello
```

```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/2-webserver.yaml
kubectl get all
kubectl exec -it pod/webserver -- /bin/bash

service nginx status
exit
```

```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/3-toolbox.json
kubectl exec -it pod/toolbox -- /bin/bash
printenv
curl google.com
```

### Deployments
```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/4-deployment.yaml
kubectl get all
kubectl scale deployment/hello --replicas=3
kubectl get all
kubectl get pods
kubectl get pods -l job=say-hello
```

```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/5-front.yaml
kubectl get all
kubectl get all -l app=handsonk8s
```

### Services
```
kubectl apply -f https://raw.githubusercontent.com/joellord/handson-k8s/master/k8s/6-service.yaml
kubectl exec -it pod/toolbox -- /bin/bash

curl localhost
curl front
```

```
kubectl logs -f -l section=front --prefix=true
```

### Ingresses
```
kubectl apply -f https://github.com/joellord/handson-k8s/blob/master/k8s/7-ingress.yaml
curl $(minikube ip)
```

### Deploy the back-end
```
kubectl apply -f https://github.com/joellord/handson-k8s/blob/master/k8s/8-backend.yaml
kubectl apply -f https://github.com/joellord/handson-k8s/blob/master/k8s/9-adv-ingress.yaml

curl $(minikube ip)/api

kubectl apply -f https://github.com/joellord/handson-k8s/blob/master/k8s/10-env.yaml
```
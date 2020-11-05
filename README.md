# Hands-On Intro To Kubernetes (And OpenShift)

## Intro to Kubernetes

### Prerequisites

* Docker
* Minikube
* Kubectl

## Nodes
Kubernetes runs your workload by placing containers into Pods to run on Nodes. A node may be a virtual or physical machine, depending on the cluster. Each node contains the services necessary to run Pods, managed by the control plane.

Typically you have several nodes in a cluster; in a learning or resource-limited environment, you might have just one.

* kubectl get nodes

## Pods

Pods are the smallest deployable units of computing that you can create and manage in Kubernetes.

A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage/network resources, and a specification for how to run the containers. A Pod's contents are always co-located and co-scheduled, and run in a shared context. A Pod models an application-specific "logical host": it contains one or more application containers which are relatively tightly coupled. In non-cloud contexts, applications executed on the same physical or virtual machine are analogous to cloud applications executed on the same logical host.

* Create new pod (1-pod.yaml)
* kubectl apply -f ./k8s/1-pod.yaml
* kubectl get all
* kubectl describe pod/hello
* kubectl logs hello
* kubectl get pods - See restarts
* kubectl delete pod hello
* kubectl apply -f ./k8s/2-webserver.yaml
* kubectl get all
* kubectl exec -it pod/webserver -- /bin/bash
  * service nginx status
  * exit
* kubectl apply -f ./k8s/3-toolbox.json
* kubectl exec -it pod/toolbox -- /bin/bash
* printenv
* curl google.com
* curl webserver
Log back into web server
hostname -I
log back in toolbox 
curl ip



## Deployments

Pods by themselves are useless...  introducing deployments.

A Deployment provides declarative updates for Pods ReplicaSets.

You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate. You can define Deployments to create new ReplicaSets, or to remove existing Deployments and adopt all their resources with new Deployments.

* kubectl apply -f ./4-deployment.yaml
* kubectl get all
* kubectl logs hello-769fc65b75-8r85k
* kubectl logs -f hello-769fc65b75-8r85k
* kubectl scale deployment/hello --replicas=3
* kubectl get all
* kubectl get pods
* kubectl get pods -l job=say-hello
* kubectl logs hello-769fc65b75-mxn25
* kubectl delete pod hello-769fc65b75-mxn25
* kubectl get pods -l job=say-hello

Real application

* kubectl apply -f ./k8s/5-front.yaml
* kubectl get all
* kubectl get all -l app=handsonk8s

How to reach? Services!

## Services

An abstract way to expose an application running on a set of Pods as a network service.

With Kubernetes you don't need to modify your application to use an unfamiliar service discovery mechanism. Kubernetes gives Pods their own IP addresses and a single DNS name for a set of Pods, and can load-balance across them.

* kubectl apply -f ./k8s/6-service.yaml
* kubectl exec -it pod/toolbox -- /bin/bash
  * curl localhost
  * curl front
* (other tab)
* kubectl logs -f -l section=front --prefix=true
  * curl front
  * exit

## Ingresses

An API object that manages external access to the services in a cluster, typically HTTP.

Ingress may provide load balancing, SSL termination and name-based virtual hosting.

* kubectl apply -f ./k8s/7-ingress.yaml
* curl $(minikube ip)

## API

Deploy the API 

* kubectl apply -f ./k8s/8-backend.yaml

Test in browser

* kubectl apply -f ./k8s/9-adv-ingress.yaml
* curl $(minikube ip)/api

Add environment variables

* kubectl apply -f ./k8s/10-env.yaml

## Add other API

Add other API service

name: handsonk8s-crash
env var: CRASHING_API_URL

## Intro to OpenShift

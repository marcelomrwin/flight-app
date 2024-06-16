# Flight App


### Just Start
```shell
podman compose down && podman compose up

```

### Erase All and start
```shell
podman system prune -f && podman volume prune -f && podman compose down && podman compose up
```
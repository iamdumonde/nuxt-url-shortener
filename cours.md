## Plugin Nuxt
En Nuxt, les plugins sont utilisés pour injecter des fonctionnalités globales ou pour configurer des bibliothèques tierces qui doivent être initialisées avant que l'application ne démarre. 


## Axios Plugin 
On peut et on utilise souvent axios sous forme de plugin dans une application Nuxt...

# Pourquoi ???
1. Initialisation et Configuration Globale 
On configure axios une seule fois (par exemple définir l'URL de base, les en-têtes communs, les intercepteurs...) et cette configuration sera partagée partout dans votre application

2. Eviter la redondance
Au lieu de répérer la configuration d'Axios dans chaque composant ou page, vous pouvez centraliser cette configuration, ce qui réduit le risque d'erreurs et rend le code plus propre et plus facile à  maintenir.
# Papacapim - Plataforma de Microblogging em Desenvolvimento

**Papacapim** é um projeto de aplicativo de rede social em desenvolvimento, com o objetivo de criar uma plataforma de microblogging semelhante ao Twitter. Este projeto está sendo desenvolvido durante a disciplina de Desenvolvimento Mobile 2024.1 e será apresentado ao IFBA no final do semestre.

## Visão Geral

Papacapim permite que os usuários publiquem postagens curtas, curtam, comentem em postagens de outros usuários e realizem interações sociais. O foco principal é explorar conceitos de desenvolvimento mobile, design de interfaces e integração com back-end. Vale ressaltar que Papacapim é um projeto de pequena escala, sem foco em escalabilidade ou suporte a um grande número de usuários.

## Funcionalidades Principais

- **Efetuar Registros**: Permite que novos usuários se registrem na plataforma.
- **Login**: Acesso de usuários existentes à plataforma.
- **Alterar Dados**: Usuários podem modificar suas informações pessoais.
- **Excluir Conta**: Opção para remoção completa da conta do usuário.
- **Buscar Usuário**: Ferramenta de pesquisa para encontrar outros usuários na plataforma.
- **Seguir/Deixar de Seguir**: Opção de seguir ou deixar de seguir outros usuários.
- **Responder Postagens**: Interação direta com postagens de outros usuários.

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **JavaScript**: Linguagem de programação usada para escrever o código do app.
- **Expo**: Ferramenta utilizada para facilitar o desenvolvimento e a distribuição do aplicativo.
- **React Navigation**: Biblioteca para navegação entre as telas do aplicativo e criação de rotas.

## Como Testar o Aplicativo

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- **Expo CLI**: Instale globalmente através do comando:
  ```bash
  npm install -g expo-cli
  ```
- **Git**: Necessário para clonar o repositório.
- **Yarn**: Se ainda não tiver o Yarn instalado, você pode instalá-lo globalmente com o comando:
  ```bash
  npm install -g yarn
  ```

### Passos para Testar

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/diogomasc/Papacapim_v2.git
   cd Papacapim_v2
   ```

2. **Instale as Dependências**:

   ```bash
   yarn install
   ```

3. **Inicie o Aplicativo**:

   ```bash
   npm start
   ```

   Ou para limpar o cache antes de iniciar:

   ```bash
   npx expo start -c
   ```

4. **Executando e Testando o Aplicativo**

   - **Usando o Expo para Ler o QR Code**:

     1. O Expo CLI gerará um QR Code.
     2. Abra o aplicativo **Expo Go** no seu dispositivo móvel.
     3. Escaneie o QR Code exibido no terminal ou na página web que abrir.
     4. O aplicativo será carregado automaticamente no seu dispositivo.

   - **Usando o Emulador Android**:
     1. Certifique-se de que o [Android Studio](https://developer.android.com/studio?hl=pt-br) esteja instalado e configurado.
     2. No Android Studio, abra o AVD Manager e inicie um dispositivo virtual (emulador).
     3. Com o emulador em execução, execute o comando `adb devices` para verificar se o emulador foi detectado corretamente.
     4. Inicie o aplicativo no emulador com o comando:
        ```bash
        npx expo start --android
        ```
        Ou digite `A` no terminal.
     5. O aplicativo será compilado e executado no emulador Android.

5. **Parar a Execução**:
   ```bash
   Ctrl + C
   ```

## Telas

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/7f701fb4-b6fb-40c2-98e3-ccfb0c6f8dda" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/81caec5e-bbf0-4187-849c-70226bc1789a" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/7e2d5606-c6fb-4426-9f92-edac7e241c9b" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/6829c303-82ae-41f1-847c-89181d9db1d8" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/a5890b37-fc01-43dc-b641-e14d3bc01866" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/09a466f2-a023-4bd9-bfea-a1e4ebf7b93d" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4f828c0e-424d-4592-b53f-1120bfa38799" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/22475936-e4cb-4787-9766-c1e1dd4d6326" alt="Tela 8" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/769a4204-422a-4d03-bd66-7bfd5706cbd8" alt="Tela 9" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b763839f-cf54-4090-86ec-30a467af4e7c" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3d2e747d-0e66-46fb-bbb4-1edb6d3a382e" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/794b367c-c54f-43dd-ba1d-204fca897403" alt="Tela 12" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/af73523c-498c-41f3-b290-1759b390dc15" alt="Tela 13" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/1cfe3e14-ddfe-4022-ab15-91932df2783d" alt="Tela 14" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/7a135ab6-45f7-4cc4-bd31-e29f690058d9" alt="Tela 15" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/0858c914-a810-40e5-8928-2449f595e2ad" alt="Tela 16" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/1d013823-9da1-45e3-8525-74cf97ca1e97" alt="Tela 17" style="height: 500px; margin-right: 10px;">
</div>

## Licença

Este projeto é apenas para fins educacionais e não possui uma licença aberta. Todos os direitos são reservados.

Papacapim está em constante desenvolvimento. Esta versão é uma prova de conceito e pode sofrer alterações significativas ao longo do tempo. Fique atento às atualizações e melhorias futuras!

---

Desenvolvido por Diogo Mascarenhas durante a disciplina de Desenvolvimento Mobile 2024.1 - IFBA.

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
   git clone https://github.com/diogomasc/Papacapim.git
   cd Papacapim
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
   <img src="https://github.com/user-attachments/assets/280f917e-017a-4fd1-9e89-75ae23e7227e" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/44365f3a-da8f-441b-ba95-0f25baf80465" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/2d3c20d9-d905-480f-b67b-64556b3a1523" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3c3cc2bc-c620-456b-928a-7c1b9c8d559f" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b3203455-25e5-4ae0-ae7d-5642b91bffbc" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/68b52c56-a7e6-448f-bee4-f6cc7e36d75e" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/9ed99880-02cd-40cf-9338-006991de2c12" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/eeb24816-dbf5-4ddb-9dd8-8785909ed991" alt="Tela 8" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/c12ae398-a6e9-4dcd-b079-7c29f25281a3" alt="Tela 9" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/bc81908e-5b11-4730-86e5-55d48263bca5" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/d0bdda11-9b79-4d66-b5c1-f9b22c693cc0" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b9f21cbe-dd3a-4abe-80b7-b9a8a2c7a285" alt="Tela 12" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/b3203455-25e5-4ae0-ae7d-5642b91bffbc" alt="Tela 13" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/e6f452e4-2964-430b-b54b-b8e3d644d3c8" alt="Tela 14" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/5e87488c-35e2-4b3c-8db6-4478ec12024b" alt="Tela 15" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/ee847f73-6919-4a89-b1eb-1b15e93c4e12" alt="Tela 16" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/cfc63a83-e3b7-4110-a3a5-21acacc9ffc5" alt="Tela 17" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3d26a06c-5334-4205-b0e9-a7e8d4b550c4" alt="Tela 18" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4f9404a1-867a-4bb6-9996-0104e6ac873a" alt="Tela 19" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/f120fc2f-7a51-4fc2-97ee-df7aa165785a" alt="Tela 20" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/65669fc9-57a2-426d-b1da-6e105acd69c6" alt="Tela 21" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/76f51f40-2aa3-45cd-9f26-518ab4d33112" alt="Tela 22" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/2eec8af7-0878-4250-9937-f094e478f0e9" alt="Tela 23" style="height: 500px; margin-right: 10px;">
</div>

## Licença

Este projeto é apenas para fins educacionais e não possui uma licença aberta. Todos os direitos são reservados.

Papacapim está em constante desenvolvimento. Esta versão é uma prova de conceito e pode sofrer alterações significativas ao longo do tempo. Fique atento às atualizações e melhorias futuras!

---

Desenvolvido por Diogo Mascarenhas durante a disciplina de Desenvolvimento Mobile 2024.1 - IFBA.

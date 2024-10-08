# Papacapim - Plataforma de Microblogging em Desenvolvimento

**Papacapim** é um projeto de aplicativo de rede social em desenvolvimento, com o objetivo de criar uma plataforma de microblogging semelhante ao Twitter. Este projeto está sendo desenvolvido durante a disciplina de Desenvolvimento Mobile 2024.1 e será apresentado ao IFBA no final do semestre.

## Visão Geral

Papacapim permite que os usuários publiquem postagens curtas, compartilhem imagens, curtam, comentem em postagens de outros usuários e realizem diversas interações sociais. O foco principal é explorar conceitos de desenvolvimento mobile, design de interfaces e integração com back-end. Vale ressaltar que Papacapim é um projeto de pequena escala, sem foco em escalabilidade ou suporte a um grande número de usuários.

## Funcionalidades Principais

- **Efetuar Registros**: Permite que novos usuários se registrem na plataforma.
- **Login**: Acesso de usuários existentes à plataforma.
- **Alterar Dados**: Usuários podem modificar suas informações pessoais.
- **Excluir Conta**: Opção para remoção completa da conta do usuário.
- **Buscar Usuário**: Ferramenta de pesquisa para encontrar outros usuários na plataforma.
- **Postagem**: Criação e compartilhamento de postagens curtas com envio de imagem.
- **Seguir/Deixar de Seguir**: Opção de seguir ou deixar de seguir outros usuários.
- **Responder Postagens**: Interação direta com postagens de outros usuários.
- **Excluir Postagens**: Remoção de postagens criadas.
- **Curtir/Descurtir Postagens**: Interações de engajamento com postagens.

## Principais Telas do Aplicativo

1. **Tela de Login**
2. **Tela de Cadastro**
3. **Tela de Feed**
4. **Tela de Perfil do Usuário**
5. **Tela de Alteração de Dados do Usuário**
6. **Tela de Postagem**

## Tecnologias Utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **JavaScript**: Linguagem de programação usada para escrever o código do app.
- **Expo**: Ferramenta utilizada para facilitar o desenvolvimento e a distribuição do aplicativo.
- **React Navigation**: Biblioteca para navegação entre as telas do aplicativo e criação de rotas.
- **Git**: Controle de versão para gerenciar o código-fonte.
- **GitHub**: Plataforma para hospedar o repositório do projeto.

## Como Testar o Aplicativo

### Pré-requisitos

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- **Expo CLI**: Instale globalmente através do comando:
  ```bash
  npm install -g expo-cli
  ```
- **Git**: Necessário para clonar o repositório.

### Passos para Testar

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/diogomasc/Papacapim.git
   cd Papacapim
   ```

2. **Instale as Dependências**:
   ```bash
   npm install
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

## Contribuições

Contribuições para o desenvolvimento do Papacapim são bem-vindas. Caso tenha sugestões ou queira reportar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é apenas para fins educacionais e não possui uma licença aberta. Todos os direitos são reservados.

Papacapim está em constante desenvolvimento. Esta versão é uma prova de conceito e pode sofrer alterações significativas ao longo do tempo. Fique atento às atualizações e melhorias futuras!

---

Desenvolvido por Diogo Mascarenhas durante a disciplina de Desenvolvimento Mobile 2024.1 - IFBA.

## Telas

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/a7a612d7-fa8f-4b3e-9daa-db58b180c9e3" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/e58932d0-e06e-48c9-beae-55e691f55895" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/ab4e0898-7c5a-4f05-91dc-0904933e120e" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/861a433a-c47b-4b50-9aef-c496e83ac893" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/508ec6ea-3f58-409a-82f6-6d99bf32c9d9" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/825312f2-71c2-4c96-a7db-44557054aa71" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3487bca1-41fa-4b5c-a208-b189e99720a8" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/fb506914-f876-4929-81ca-6f619cd576f2" alt="Tela 8" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/65fd7940-6259-4ec7-8015-9f4d14690c50" alt="Tela 9" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4ce08b71-cd92-4e66-8805-39275c31d714" alt="Tela 10" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/438d6119-5143-4c2a-b1f9-dc53285eaf39" alt="Tela 11" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/88e38c81-ac87-4f43-90f3-d39804047262" alt="Tela 12" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/941e444f-0cda-47db-816f-d2668e38ae39" alt="Tela 13" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/0c7e60d7-7880-438f-ac5e-321bb06f4826" alt="Tela 14" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/064b5dbd-297a-4bb7-9a4a-1a06c62b2b35" alt="Tela 15" style="height: 500px;">
</div>


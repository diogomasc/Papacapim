# Papacapim - Plataforma de Microblogging em Desenvolvimento

**Papacapim** é um projeto de aplicativo de rede social em desenvolvimento, com o objetivo de criar uma plataforma de microblogging semelhante ao Twitter. Este projeto está sendo desenvolvido durante a disciplina de Desenvolvimento Mobile 2024.1 e será apresentado ao IFBA no final do semestre.

## Visão geral

Papacapim permite que os usuários publiquem postagens curtas, compartilhem imagens, curtam, comentem em postagens de outros usuários, e realizem diversas interações sociais. O foco principal é explorar conceitos de desenvolvimento mobile, design de interfaces e integração com back-end. Vale ressaltar que Papacapim é um projeto de pequena escala, sem foco em escalabilidade ou suporte a um grande número de usuários.

## Funcionalidades principais que serão implementadas

- **Efetuar registros**: Permite que novos usuários se registrem na plataforma.
- **Login**: Acesso de usuários existentes à plataforma.
- **Alterar dados**: Usuários podem modificar suas informações pessoais.
- **Excluir conta**: Opção para remoção completa da conta do usuário.
- **Buscar usuário**: Ferramenta de pesquisa para encontrar outros usuários na plataforma.
- **Postagem**: Criação e compartilhamento de postagens curtas com envio de imagem.
- **Seguir/Deixar de seguir**: Opção de seguir ou deixar de seguir outros usuários.
- **Responder postagens**: Interação direta com postagens de outros usuários.
- **Excluir postagens**: Remoção de postagens criadas.
- **Curtir/Descurtir postagens**: Interações de engajamento com postagens.

## Principais telas do aplicativo

1. **Tela de Login**
2. **Tela de Cadastro**
3. **Tela de Feed**
4. **Tela de Perfil do Usuário**
5. **Tela de Alteração de Dados do Usuário**
6. **Tela de Postagem**

## Tecnologias utilizadas

- **React Native**: Framework principal para o desenvolvimento do aplicativo.
- **JavaScript**: Linguagem de programação usada para escrever o código do app.
- **Expo**: Ferramenta utilizada para facilitar o desenvolvimento e a distribuição do aplicativo.
- **React Navigation**: Biblioteca para navegação entre as telas do aplicativo e criação de rotas.
- **Git**: Controle de versão para gerenciar o código-fonte.
- **GitHub**: Plataforma para hospedar o repositório do projeto.

## Como testar o aplicativo

### Pré-requisitos:

- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
- **Expo CLI**: Instale globalmente através do comando:
  ```bash
  npm install -g expo-cli
  ```
- **Git**: Necessário para clonar o repositório.

### Passos para Testar:

1. **Clone o Repositório**:
   - Clone o repositório em sua máquina local utilizando o Git.
   ```bash
   git clone https://github.com/diogomasc/Papacapim.git
   cd Papacapim
   ```

2. **Instale as Dependências**:
   - Execute o seguinte comando para instalar todas as dependências do projeto.
   ```bash
   npm install
   ```

   - Para instalar uma dependência específica, utilize:
   ```bash
   npm install <nome-da-dependencia>
   ```

3. **Inicie o Aplicativo**:
   - Inicie o servidor de desenvolvimento do Expo com o comando:
   ```bash
   npm start
   ```
   - Ou para limpar o cache antes de iniciar:
   ```bash
   npx expo start -c
   ```

4. **Executando e Testando o Aplicativo no Dispositivo Virtual ou Físico**

4.1 **Usando o Expo para Ler o QR Code**:
   - Se você estiver usando o [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&pli=1) para testar o aplicativo:
     1. O Expo CLI irá gerar um QR Code.
     2. Abra o aplicativo **Expo Go** no seu dispositivo móvel.
     3. Escaneie o QR Code exibido no terminal ou na página web que abrir.
     4. O aplicativo será carregado automaticamente no seu dispositivo.

4.2 **Usando o Emulador Android**:
   - Para testar seu aplicativo em um emulador Android:
     1. Certifique-se de que o [Android Studio](https://developer.android.com/studio?hl=pt-br) esteja instalado e configurado no seu ambiente.
     2. No Android Studio, abra o AVD Manager e inicie um dispositivo virtual (emulador).
     3. Com o emulador em execução, volte ao terminal e execute o comando `adb devices` para verificar se o emulador foi detectado corretamente.
     4. Agora, inicie o aplicativo no emulador com o comando `npx react-native run-android` ou digite `A` no terminal.
     5. O aplicativo será compilado e executado no emulador Android.

5. **Parar a Execução**:
   - Para parar a execução do aplicativo, utilize o atalho:
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

<h2>Telas Atuais</h2>

<div style="display: flex; overflow-x: auto;">
   <img src="https://github.com/user-attachments/assets/14d75393-7caa-4478-bbe1-1160b75f4562" alt="Tela 1" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/497e7d6e-e2fc-4dd4-9625-59d79cac88e8" alt="Tela 2" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/cea22855-c451-4735-912a-f41a7477534c" alt="Tela 3" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/3be21dd6-19bf-4c7a-82a3-ebec66666398" alt="Tela 4" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4e248a57-445a-40d6-acda-1ac039578a40" alt="Tela 5" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/4d7f6070-2bd9-4be2-8b8d-bfb4be054102" alt="Tela 6" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/0007e7a8-9c74-4473-b9c6-6c6f48a0147a" alt="Tela 7" style="height: 500px; margin-right: 10px;">
   <img src="https://github.com/user-attachments/assets/ff0b5a2a-3b18-4244-8506-01d9502334be" alt="Tela 8" style="height: 500px;"> 
</div>



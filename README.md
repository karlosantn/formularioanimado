## Visão Geral

Este documento HTML representa um formulário simples de login para registro de usuários. O formulário coleta informações do usuário, como nome, e-mail, número de telefone, idade e CPF (Cadastro de Pessoas Físicas). Os usuários podem enviar seus detalhes para registro clicando no botão "Enviar".

## Estrutura de Arquivos

- **index.html**: O arquivo HTML principal contendo a estrutura do formulário de login.
- **style.css**: Folha de estilo externa para estilizar o formulário de login.
- **index.js**: Arquivo JavaScript para lidar com a submissão do formulário.

## Estrutura HTML

### Seção Head

- `<!DOCTYPE html>`: Define o tipo de documento e a versão.
- `<html lang="en">`: Especifica o idioma do documento como inglês.
- `<head>`: Contém metadados, incluindo conjunto de caracteres, configurações de viewport, link para a folha de estilo externa e o título do documento.

### Seção Body

- `<section>`: Representa a seção principal de conteúdo da página.

#### Fundo Animado

- `<span>`: Múltiplos spans usados para criar um efeito de fundo animado.

#### Formulário de Login

- `<div class="signin">`: Container para o formulário de login.
  - `<form>`: Elemento de formulário com a ação definida como "#" (nenhuma ação real) e uma função JavaScript (`abrirWhatsapp()`) para lidar com a submissão do formulário.
    - `<div class="content">`: Invólucro principal de conteúdo para o formulário.
      - `<h2>`: Título "Inscreva-se".
      - `<div class="form">`: Container para os elementos do formulário.
        - Vários `<div class="inputBox">`: Contêineres de entrada para diferentes informações do usuário (nome, e-mail, telefone, idade, CPF).
        - `<div id="termo">`: Contêiner para um parágrafo descrevendo os termos de uso dos dados.
        - `<input type="submit" value="Enviar">`: Botão de envio para a submissão do formulário.

### Seção de Script

- `<script src="index.js"></script>`: Arquivo JavaScript externo para lidar com a submissão do formulário.

## Folha de Estilo

- **style.css**: Arquivo CSS externo contendo estilos para o formulário de login e o fundo animado.

## JavaScript

- **index.js**: Arquivo JavaScript para lidar com a submissão do formulário. A função real `abrirWhatsapp()` é fornecida no arquivo JavaScript externo.

## Uso

1. Abra o arquivo `index.html` em um navegador da web.
2. Preencha as informações necessárias nos campos do formulário.
3. Clique no botão "Enviar" para acionar a submissão do formulário.

Observação: A ação do formulário está atualmente definida como "#" para fins de demonstração. Certifique-se de substituí-la pelo URL ou script real de submissão do formulário.

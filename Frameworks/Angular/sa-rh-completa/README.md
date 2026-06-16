# Especificação de Requisitos de Software (SRS)

**Projeto:** Plataforma RH  
**Versão:** 1.0  
**Data:** 2 de Junho de 2026

## 1. Introdução

### 1.1 Propósito

Este documento descreve os requisitos funcionais e não funcionais para o Módulo de Currículos e Vagas da Plataforma de RH. O objetivo deste módulo é permitir que candidatos cadastrem e gerenciem suas informações profissionais, além de permitir a visualização e administração de vagas e currículos.

### 1.2 Escopo

O sistema compreende uma interface frontend em Angular integrada a um backend simulado com `json-server`. As funcionalidades incluem cadastro, listagem, atualização e exclusão de currículos e vagas, com persistência dos dados no arquivo `backend/db.json`.

---

## 2. Descrição Geral

A Plataforma RH é uma aplicação web para consulta e gestão de vagas e currículos. O usuário pode acessar a página inicial, visualizar vagas disponíveis, administrar vagas cadastradas, cadastrar currículos e consultar a lista de currículos.

O projeto utiliza Angular no frontend, rotas para navegação entre telas e serviços HTTP para comunicação com o backend simulado. O arquivo `backend/db.json` representa a base de dados local, contendo os recursos `vagas` e `curriculos`.

Principais telas do sistema:

- Página inicial: rota `/`.
- Listagem de vagas: rota `/vagas`.
- Painel de vagas: rota `/painel-vagas`.
- Formulário de currículo: rota `/curriculo-form`.
- Lista de currículos: rota `/curriculo-list`.

---

## 3. Requisitos do Sistema

### 3.1 Requisitos Funcionais (RF)

- **RF01:** O sistema deve listar as vagas cadastradas no backend simulado.
- **RF02:** O sistema deve permitir cadastrar uma nova vaga.
- **RF03:** O sistema deve permitir atualizar uma vaga existente.
- **RF04:** O sistema deve permitir excluir uma vaga existente.
- **RF05:** O sistema deve permitir cadastrar um currículo com dados pessoais, formações, experiências, habilidades, idiomas e redes sociais.
- **RF06:** O sistema deve permitir listar os currículos cadastrados.
- **RF07:** O sistema deve permitir visualizar os detalhes de um currículo selecionado.
- **RF08:** O sistema deve permitir carregar um currículo pelo ID para atualização.
- **RF09:** O sistema deve permitir atualizar um currículo existente.
- **RF10:** O sistema deve permitir excluir um currículo existente.
- **RF11:** Após cadastrar ou atualizar um currículo, o sistema deve direcionar o usuário para a lista de currículos.

### 3.2 Requisitos Não Funcionais (RNF)

- **RNF01:** A aplicação deve ser desenvolvida em Angular.
- **RNF02:** A comunicação com dados deve ser feita por HTTP usando serviços Angular.
- **RNF03:** O backend local deve ser simulado com `json-server`.
- **RNF04:** Os dados devem ser persistidos no arquivo `backend/db.json`.
- **RNF05:** A aplicação deve apresentar navegação por rotas sem recarregar toda a aplicação, exceto quando necessário para garantir atualização de dados.
- **RNF06:** Os formulários devem validar os campos obrigatórios antes do envio.
- **RNF07:** O sistema deve exibir mensagens de sucesso ou erro nas operações principais.
- **RNF08:** A interface deve ser simples, organizada e compatível com uso em navegador moderno.

---

## 4. Interface de Dados e Modelagem do Sistema

O backend simulado possui dois recursos principais:

- `vagas`: armazena dados das vagas disponíveis.
- `curriculos`: armazena dados dos currículos cadastrados.

### Modelo de Vaga

Campos principais:

- `id`
- `nome`
- `foto`
- `descricao`
- `salario`

### Modelo de Currículo

Campos principais:

- `id`
- `usuarioId`
- `nomeCompleto`
- `email`
- `telefone`
- `cidade`
- `estado`
- `cargoDesejado`
- `resumoProfissional`
- `formacoes`
- `experiencias`
- `habilidades`
- `idiomas`
- `linkedin`
- `github`

### 4.1 Diagramas

#### 4.1.1 Diagrama de Uso

```text
Usuário
 ├── Visualizar vagas
 ├── Cadastrar currículo
 ├── Consultar lista de currículos
 └── Visualizar detalhes do currículo

Administrador
 ├── Cadastrar vaga
 ├── Atualizar vaga
 ├── Excluir vaga
 ├── Consultar currículos
 ├── Atualizar currículo
 └── Excluir currículo
```

#### 4.1.2 Diagrama de Classe

```text
Vaga
 ├── id
 ├── nome
 ├── foto
 ├── descricao
 └── salario

Curriculo
 ├── id
 ├── usuarioId
 ├── nomeCompleto
 ├── email
 ├── telefone
 ├── cidade
 ├── estado
 ├── cargoDesejado
 ├── resumoProfissional
 ├── formacoes
 ├── experiencias
 ├── habilidades
 ├── idiomas
 ├── linkedin
 └── github

ApiService
 ├── getVagas()
 ├── postVaga()
 ├── putVaga()
 └── deleteVaga()

CurriculoService
 ├── getCurriculos()
 ├── getCurriculoById()
 ├── getCurriculoByUsuarioId()
 ├── postCurriculo()
 ├── putCurriculo()
 └── deleteCurriculo()
```

#### 4.1.3 Diagrama de Fluxo

```text
Cadastro de currículo
Usuário preenche formulário
        ↓
Sistema valida campos obrigatórios
        ↓
Sistema envia POST para /curriculos
        ↓
json-server salva no backend/db.json
        ↓
Sistema redireciona para /curriculo-list
        ↓
Lista de currículos carrega dados atualizados
```

---

## 5. Critérios de Aceitação

1. **Operação CRUD:** É possível criar, ler, atualizar e excluir registros no `db.json` através da interface.
2. **Navegação:** As rotas configuradas levam aos componentes corretos sem erros de console.
3. **Feedback:** O usuário recebe uma confirmação ao salvar, atualizar ou excluir um registro.
4. **Consistência:** Os dados exibidos nas listagens correspondem aos dados salvos no backend simulado.
5. **Currículos:** Após cadastrar um currículo, o usuário é redirecionado para a lista e consegue visualizar o registro cadastrado.
6. **Validação:** O formulário impede o cadastro quando campos obrigatórios não foram preenchidos.

---

## 6. Configuração do Ambiente

### Pré-requisitos

- Node.js instalado.
- npm instalado.
- Angular CLI disponível pelo projeto ou pelo `npx`.

### Instalação

```bash
npm install
```

### Executar o backend simulado

Em um terminal, execute:

```bash
npx json-server --watch backend/db.json --port 3024
```

A API ficará disponível em:

```text
http://localhost:3024
```

Principais endpoints:

- `http://localhost:3024/vagas`
- `http://localhost:3024/curriculos`

### Executar o frontend

Em outro terminal, execute:

```bash
npm start
```

A aplicação ficará disponível em:

```text
http://localhost:4200
```

### Build do projeto

```bash
npm run build
```

### Observações

- O backend simulado precisa estar rodando para que as listagens, cadastros, atualizações e exclusões funcionem.
- Os dados cadastrados localmente ficam salvos em `backend/db.json`.

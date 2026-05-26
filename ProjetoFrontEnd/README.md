# ProjetoFrontEnd

## Visão geral
Este repositório contém três projetos front-end em diferentes níveis para a prática (principalmente) de JavaScript. Cada projeto é independente e tem interface web pronta para abrir no navegador.

- `PianoVirtual/`
- `ProjetoDificil/`
- `Temporizador/`

## Piano Virtual
- **Funcionalidades:**
  - Piano virtual com teclas brancas e pretas em HTML/CSS
  - Sons gerados com Web Audio API
  - Toque por clique do mouse(`A S D F G H J`)
  - Animação visual nas teclas ao tocar

- **Desafios:**
  - Sincronizar clique
  - Fazer a animação da tecla durar pouco tempo
  - Ajustar o som para funcionar de forma fluida

- **Próximos passos:**
  - Adicionar mais oitavas
  - Melhorar responsividade
  - Sincronizar com teclas do teclado

## Temporizador
- **Funcionalidades:**
  - Temporizador com contagem regressiva
  - Botões de iniciar, parar e limpar
  - Presets rápidos: `30s`, `1m`, `5m`
  - Exibição do tempo no formato `HH:MM:SS`
  - Atualização visual em tempo real

- **Desafios:**
  - Evitar múltiplos intervalos ao mesmo tempo
  - Garantir precisão na atualização do tempo
  - Manter o display sempre correto

- **Próximos passos:**
  - Adicionar alerta sonoro ao chegar em zero
  - Adicionar aviso visual ao finalizar

## Calculadora
- **Funcionalidades:**
  - Calculadora com operações básicas: `+`, `-`, `*`, `/`
  - Botões numéricos e operadores
  - Botão `=` para calcular
  - Botão `C` para limpar tudo
  - Botão `DEL` para apagar o último caractere
  - Atualização do visor com expressão e resultado

- **Desafios:**
  - Manter os cálculos corretos
  - Integrar bem a lógica dos botões com o visor

- **Próximos passos:**
  - Melhorar a validação das expressões
  - Substituir `eval` por uma solução mais segura
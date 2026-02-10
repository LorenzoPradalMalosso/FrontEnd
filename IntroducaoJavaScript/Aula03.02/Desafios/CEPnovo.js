import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function buscarCEP(cep) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 3000);

  try {
    const apiURL = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    const response = await fetch(apiURL, { signal: controller.signal });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error("Erro na requisição");
    }

    const data = await response.json();
    console.log(data.street);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Tempo limite excedido (3 segundos).");
    } else {
      console.error("Erro:", error.message);
    }
  }
}

async function main() {
  let continuar = true;

  while (continuar) {
    const cep = await rl.question("Digite seu CEP: ");
    await buscarCEP(cep);

    const resposta = await rl.question(
      "Deseja consultar outro CEP?\n1 - Sim\n2 - Não\nResposta: ",
    );

    if (resposta.trim() === "2") {
      continuar = false;
    }
  }

  rl.close();
  console.log("Programa encerrado.");
}

main();
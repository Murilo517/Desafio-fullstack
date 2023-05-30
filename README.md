# Desafio-fullstack-BackEnd

Bem-vindo ao repositório do meu projeto de Backend desenvolvido em Express.js e TypeScript! Este projeto consiste em uma API poderosa que estabelece a relação com o projeto de Agenda de Contatos, também disponível em meus repositórios.

Através desta API, é possível realizar operações de criação, leitura, atualização e exclusão de contatos. Além disso, ela também oferece recursos de autenticação e gerenciamento de usuários para garantir a segurança e privacidade dos dados.

Neste repositório do GitHub, você encontrará todo o código-fonte necessário para a execução desta API, bem como as configurações adequadas. Além disso, uma documentação detalhada está disponível, onde você poderá encontrar todas as informações necessárias para utilizar a API em conjunto com o projeto de Agenda de Contatos.

Para acessar a documentação da API, você pode clicar no seguinte link: https://agenda-doc.vercel.app/

Nesta documentação, você encontrará informações sobre os endpoints disponíveis, parâmetros de requisição, estrutura das respostas e exemplos de uso. É um recurso valioso para entender como utilizar a API em meu projeto de Agenda de Contatos.

Fique à vontade para explorar o repositório, testar a API em seu ambiente local e integrá-la ao projeto de Agenda de Contatos. Aproveite os benefícios oferecidos por esta API robusta, desenvolvida com as melhores práticas em Express.js e TypeScript.

Passo a passo:

1.No diretório raiz, execute o comando yarn install. Isso instalará todas as dependências necessárias para a aplicação, conforme especificado no arquivo package.json.

2.Configure as variáveis de ambiente seguindo o exemplo do arquivo .env.example

2.Gere as a migrações com o comando : 'npm run typeorm migration:generate ./src/migrations/createTables -- -d ./src/data-source.ts'

3.Rode as migrações com o comando: 'npm run typeorm migration:run -- -d ./src/data-source'

4.Após a conclusão, você pode iniciar sua aplicação executando o comando yarn dev no terminal. Esse comando irá iniciar o servidor da API em modo de desenvolvimento.

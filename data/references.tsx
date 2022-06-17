import { Tooltip } from 'src/components/tooltip'

export const references = [
  {
    title: 'Setup e configuração',
    commands: [
      {
        title: 'Listar todas as configurações Globais do Git.',
        code: 'git config --list',
      },
      {
        title: 'Vincular uma palavra ou letra à um comando existente.',
        code: 'git config --global alias.s status',
      },
    ],
  },
  {
    title: 'Criando e obtendo projetos',
    commands: [
      {
        title: 'Iniciar um repositório git.',
        code: 'git init',
      },
      {
        title: 'Clonar um repositório online.',
        code: [
          'git clone [URL | SSH] ',
          <Tooltip key={2} content="Omitir para salvar com o nome do repositório atual">
            [NOME DO REPOSITÓRIO]
          </Tooltip>,
        ],
      },
    ],
  },
  {
    title: 'Versionamento básico',
    commands: [
      {
        title: 'Preparar todas as mudanças para commit.',
        code: 'git add .',
      },
      {
        title: 'Visualizar a Working Tree.',
        code: 'git status',
      },
      {
        title: 'Mostrar as modificações na Working Tree.',
        code: 'git diff',
      },
      {
        title: 'Mostrar apenas o nome dos arquivos modificados.',
        code: 'git diff --name-only',
      },
      {
        title: 'Criar um commit com uma mensagem.',
        code: 'git commit -m "Mensagem"',
      },
      {
        title: 'Mover um arquivo de Staged para Modified/Untrack.',
        code: 'git reset HEAD [NOME DO ARQUIVO]',
      },
      {
        title:
          'Voltar para o commit excluindo os anteriores e com os arquivos do commit em Staged.',
        code: 'git reset --soft [HASH]',
      },
      {
        title:
          'Voltar para o commit excluindo os anteriores e com os arquivos do commit em Modified.',
        code: 'git reset --mixed [HASH]',
      },
      {
        title:
          'Voltar para o commit excluindo os anteriores e excluindo os arquivos do commit (Cuidado).',
        code: 'git reset --hard [HASH]',
      },
    ],
  },
  {
    title: 'Ramificações e Mesclagem',
    commands: [
      {
        title: 'Listar todas as branch e mostrar a branch ativa.',
        code: 'git branch',
      },
      {
        title: 'Criar uma branch.',
        code: 'git branch [NOME DA BRANCH]',
      },
      {
        title: 'Apagar uma branch localmente.',
        code: 'git branch -d [NOME DA BRANCH]',
      },
      {
        title: 'Apagar uma branch forçadamente.',
        code: 'git branch -D [NOME DA BRANCH]',
      },
      {
        title: 'Navegar até a branch.',
        code: 'git checkout [NOME DA BRANCH]',
      },
      {
        title: 'Criar uma branch e navegar para ela.',
        code: 'git checkout -b [NOME DA BRANCH]',
      },
      {
        title: 'Descartar as mudanças naquele arquivo.',
        code: 'git checkout [NOME DO ARQUIVO]',
      },
      {
        title: 'Juntar os dados de uma branch selecionada para a branch atual.',
        code: 'git merge [NOME DA BRANCH]',
      },
      {
        title: 'Criar um Stash das mudanças.',
        code: 'git stash',
      },
      {
        title: 'Criar um Stash das mudanças e salvar uma mensagem.',
        code: 'git stash -m "Mensagem"',
      },
      {
        title: 'Aplicar um Stash sem remover ele da pilha.',
        code: 'git stash apply',
      },
      {
        title: 'Listar todos os Stash',
        code: 'git stash list',
      },
      {
        title: 'Limpar todos os Stash',
        code: 'git stash clear',
      },
      {
        title: 'Listar as tag existentes.',
        code: 'git tag',
      },
      {
        title: 'Criar uma tag',
        code: 'git tag -a [TAG] -m "Descrição"',
      },
    ],
  },
  {
    title: 'Compartilhamento e atualização de projetos',
    commands: [
      {
        title: 'Enviar commits de uma branch para um repositório remoto.',
        code: 'git push [NOME DO REPOSITÓRIO REMOTO] [NOME DA BRANCH]',
      },
      {
        title: 'Enviar tags de uma branch para um repositório remoto',
        code: 'git push [NOME DO REPOSITÓRIO REMOTO] [NOME DA BRANCH] --tags',
      },
      {
        title: 'Apagar tags e branches remotos',
        code: 'git push [NOME DO REPOSITÓRIO REMOTO] :[NOME DA TAG | NOME DA BRANCH]',
      },
      {
        title: 'Listar todos os repositórios remotos.',
        code: 'git remote',
      },
      {
        title: 'Listar todos os repositórios remotos com mais detalhes.',
        code: 'git remote -v',
      },
      {
        title: 'Conectar um repositório remoto.',
        code: 'git remote add [NOME DO REPOSITÓRIO REMOTO] [URL | SSH]',
      },
      {
        title: 'Renomear um repositório remoto.',
        code: 'git remote rename [NOME DO REPOSITÓRIO REMOTO ATUAL] [NOME DO REPOSITÓRIO REMOTO NOVO]',
      },
    ],
  },
  {
    title: 'Inspeção e Comparação',
    commands: [
      {
        title: 'Visualizar as modificações feita em um commit.',
        code: 'git show [HASH]',
      },
      {
        title: 'Visualizar o histórico de commits.',
        code: 'git log',
      },
      {
        title: 'Visualizar o histórico de commits em gráfico.',
        code: 'git log --graph',
      },
      {
        title: 'Filtrar o histórico de commits pelo autor.',
        code: 'git log --author="Nome do autor"',
      },
      {
        title: 'Visualizar o histórico de commits resumido.',
        code: 'git shortlog',
      },
      {
        title:
          'Visualizar o histórico de commits pela quantidade de commits dos autores.',
        code: 'git shortlog -sn',
      },
    ],
  },
  {
    title: 'Aplicação de patches',
    commands: [
      {
        title: 'Juntar os dados de uma branch selecionada para a branch atual.',
        code: 'git rebase [NOME DA BRANCH]',
      },
      {
        title: 'Desfaz um commit sem remover o commit do histórico.',
        code: 'git revert [HASH]',
      },
    ],
  },
]

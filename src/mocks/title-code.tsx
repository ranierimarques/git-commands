export const commands = [
  {
    title: 'Listar todas as configurações Globais do Git.',
    code: 'git config --list',
  },
  {
    title:
      'Vincular uma palavra ou letra à um comando existente. Agora é possível utilizar git s para executar git status.',
    code: 'git config --global alias.s status',
  },
  {
    title: 'Clonar um repositório online.',
    code: 'git clone [URL | SSH] [Nome do repositório] (Omitir para salvar com o nome do repositório atual)',
  },
  {
    title: 'Iniciar um repositório git.',
    code: 'git init',
  },
  {
    title: 'Preparar para commit todas as mudanças.',
    code: 'git add .',
  },
  {
    title: 'Criar um commit com uma mensagem.',
    code: 'git commit -m "mensagem"',
  },
  {
    title: 'Visualizar a Working Tree.',
    code: 'git status',
  },
  {
    title: 'Visualizar o histórico de Commits.',
    code: 'git log',
  },
  {
    title: 'Filtrar o histórico de Commits pelo Author especificado.',
    code: 'git log --author="João"',
  },
  {
    title: 'Visualizar em modo de gráfico o histórico de Commits.',
    code: 'git log --graph',
  },
  {
    title: 'Visualizar o histórico de Commits resumido.',
    code: 'git shortlog',
  },
  {
    title: 'Filtrar o histórico de Commits pela quantidade de Commits.',
    code: 'git shortlog -sn',
  },
  {
    title: 'Visualizar as modificações feita em um Commit usando o Hash dele.',
    code: 'git show [HASH]',
  },
  {
    title: 'Mostrar as modificações na Working Tree atual.',
    code: 'git diff',
  },
  {
    title: 'Mostrar apenas o nome dos arquivos modificados.',
    code: 'git diff --name-only',
  },
  {
    title: 'Descartar as mudanças naquele arquivo.',
    code: 'git checkout [Nome do arquivo]',
  },
  {
    title: 'Mover um arquivo de Staged para Modified/Untrack',
    code: 'git reset HEAD [Nome do arquivo]',
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
      'Voltar para o commit excluindo os anteriores e com os arquivos do commit excluídos (Cuidado).',
    code: 'git reset --hard [HASH]',
  },
  {
    title: 'Listar o nome de todos os repositórios remotos.',
    code: 'git remote',
  },
  {
    title: 'Criar um remote para um URL existente.',
    code: 'git remote add [nome] [URL | SSH]',
  },
  {
    title: 'Renomear um remote existente.',
    code: 'git remote rename [atual] [novo]',
  },
  {
    title: 'Listar o nome e o link de todos os repositórios remotos.',
    code: 'git remote -v',
  },
  {
    title:
      'Enviar os commits do repositório atual para um repositório remoto. Ex: git push [origin] [main]',
    code: 'git push [Nome do repositório remoto] [BRANCH ATUAL]',
  },
  {
    title: 'Listar todas as branch e mostrar a branch ativa.',
    code: 'git branch',
  },
  {
    title: 'Criar uma branch.',
    code: 'git branch [Nome da branch]',
  },
  {
    title: 'Apagar uma branch localmente.',
    code: 'git branch -d [Nome da branch]',
  },
  {
    title: 'Apagar uma branch forçadamente.',
    code: 'git branch -D [Nome da branch]',
  },
  {
    title: 'Navegar até a branch.',
    code: 'git checkout [Nome da branch]',
  },
  {
    title: 'Criar uma branch e navegar para ela.',
    code: 'git checkout -b [Nome da branch]',
  },
  {
    title:
      'Juntar os dados de uma branch selecionada para a branch atual. Esse comando criará um commit extra para unir as branches.',
    code: 'git merge [Branch]',
  },
  {
    title:
      'Juntar os dados de uma branch selecionada para a branch atual. O commit irá para o topo da lista.',
    code: 'git rebase [Branch]',
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
  {
    title: 'Enviar as tags do repositório atual para um repositório remoto',
    code: 'git push [Nome do repositório remoto] [BRANCH ATUAL] --tags',
  },
  {
    title:
      'Cria um novo commit sem as alterações do commit revertido e não apaga o commit revertido do histórico.',
    code: 'git revert [HASH]',
  },
  {
    title: 'Apagar tags e branches remotos',
    code: 'git push [Nome do repositório remoto] :[Nome da Tag ou Nome do Branch]',
  },
]

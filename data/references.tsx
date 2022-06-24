import { CodeComposer } from 'src/components/code-composer/code-composer'

type referencesTypes = {
  title: string
  commands: {
    description: string
    code: JSX.Element
    examples?: {
      description: (string | JSX.Element)[]
      code: (string | JSX.Element)[]
    }[]
    information?: (string | JSX.Element)[][]
    hints?: (string | JSX.Element)[][]
  }[]
}[]

export const references = [
  {
    title: 'Setup e configuração',
    commands: [
      {
        description: 'Verificar a versão do git instalada.',
        code: ['git --version'],
      },
      {
        description: 'Listar todas as configurações Globais do Git.',
        code: ['git config --list'],
        examples: [
          {
            description: 'Vincular uma palavra ou letra à um comando existente',
            code: (
              <CodeComposer
                compose={[['git'], ['config'], ['--global'], ['alias.s'], ['status']]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Criando e obtendo projetos',
    commands: [
      {
        description: 'Iniciar um repositório git.',
        code: (
          <CodeComposer
            compose={[['git'], ['init', 'Comando para iniciar o repositório git']]}
          />
        ),
      },
      {
        description: 'Clonar um repositório online.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['clone', 'Comando para baixar o repositório'],
              [
                'https://github.com/username/project.git',
                'Caminho do repositório utilizando HTTPS',
              ],
            ]}
          />
        ),
        examples: [
          {
            description: ['# Clonando usando SSH'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['clone', 'Comando para baixar o repositório'],
                  [
                    'git@github.com:username/project.git',
                    'Caminho do repositório utilizando SSH',
                  ],
                ]}
              />
            ),
          },
          {
            description: ['# Salvando o repositório com outro nome'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['clone', 'Comando para baixar o repositório'],
                  [
                    'https://github.com/username/project.git',
                    'Caminho do repositório utilizando HTTPS',
                  ],
                  ['new-website', 'Nome do repositório'],
                ]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Versionamento básico',
    commands: [
      {
        description: 'Preparar as mudanças para commit.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['add', 'Comando para adicionar um ou mais arquivos em staging'],
              ['arquivo.txt', 'Nome de um ou mais arquivos'],
            ]}
          />
        ),
        examples: [
          {
            description: ['# Adicionando vários arquivos'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['add', 'Comando para adicionar um ou mais arquivos em staging'],
                  ['arquivo1.txt', 'Nome completo do arquivo com sua extensão'],
                  ['arquivo2.txt', 'Nome completo do arquivo com sua extensão'],
                  ['...', 'arquivo3.txt  arquivo4.txt  arquivo5.txt  ...'],
                ]}
              />
            ),
          },
          {
            description: ['# Adicionando interativamente os arquivos'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['add', 'Comando para adicionar um ou mais arquivos em staging'],
                  [
                    '-p',
                    'Flag para escolher interativamente alterações específicas para commit',
                  ],
                ]}
              />
            ),
          },
          {
            description: ['# Adicionando todos os arquivos'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['add', 'Comando para adicionar um ou mais arquivos em staging'],
                  ['.', 'Comando para selecionar todos os arquivos'],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Visualizar a Working Tree.',
        code: (
          <CodeComposer
            compose={[['git'], ['status', 'Comando que mostra o ambiente de staging']]}
          />
        ),
      },
      {
        description: 'Mostrar as modificações na Working Tree.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['diff', 'Lista de forma interativa as alterações de cada arquivo'],
            ]}
          />
        ),
        examples: [
          {
            description: '# Mostrar apenas o nome dos arquivos modificados',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['diff', 'Lista de forma interativa as alterações de cada arquivo'],
                  [
                    '--name-only',
                    'Flag para mostrar apenas o nome dos arquivos modificados',
                  ],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Criar um commit com uma mensagem.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['commit', 'Commando para criar um commit'],
              ['-m', 'Flag para escrever uma mensagem de commit'],
              ['"Mensagem"', 'Mensagem descrevendo ajustes'],
            ]}
          />
        ),
        examples: [
          {
            description: ['# Commitando arquivos específicos em staging'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['commit', 'Commando para criar um commit'],
                  ['arquivo1.txt', 'Nome completo do arquivo com sua extensão'],
                  ['arquivo2.txt', 'Nome completo do arquivo com sua extensão'],
                  ['...', 'arquivo3.txt  arquivo4.txt  arquivo5.txt  ...'],
                  ['-m', 'Flag para escrever uma mensagem de commit'],
                  ['"Mensagem"', 'Mensagem descrevendo ajustes'],
                ]}
              />
            ),
          },
          {
            description: ['# Ajustar o último commit'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['commit', 'Commando para criar um commit'],
                  ['--amend', 'Flag para corrigir o último commit'],
                ]}
              />
            ),
          },
          {
            description: ['# Reaproveitando commit'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['commit', 'Commando para lidar com commits'],
                  ['-C', 'Flag para reaproveitar a mensagem de commit'],
                  [
                    'ORIG_HEAD',
                    'Cópia do estado anterior contendo a mensagem de commit anterior',
                  ],
                ]}
              />
            ),
          },
        ],
        information: [
          ['Sem usar a flag -m um editor será aberto para digitar a mensagem de commit.'],
          [
            'A mensagem de commit é obrigatória, tentar enviar sem mensagem não funcionará.',
          ],
          ['Sem especificar um arquivo todos os arquivos em staging serão comitados.'],
          [
            'Se precisar editar a mensagem quando estiver reaproveitando commit, use a flag -c.',
          ],
        ],
        hints: [
          [
            '✨ Por padrão a flag --amend fará o ajuste do último commit gerando um novo commit',
          ],
        ],
      },
      {
        description: 'Removendo um arquivo de staging.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['restore', 'Comando para restaurar o estado anterior'],
              ['--staged', 'Flag para olhar arquivos em staging'],
              ['arquivo.txt', 'Nome completo do arquivo com sua extensão'],
            ]}
          />
        ),
        examples: [
          {
            description: '# Descartando alterações',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['restore', 'Comando para restaurar o estado anterior'],
                  ['arquivo.txt', 'Nome completo do arquivo com sua extensão'],
                ]}
              />
            ),
          },
        ],
        hints: [['✨ As alterações descartadas não estão em staging']],
      },
      {
        description: 'Mover um arquivo de Staged para Modified/Untrack.',
        code: ['git reset HEAD [NOME DO ARQUIVO]'],

        examples: [
          {
            description: '# Desfazendo commits recentes',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['HEAD', 'Ponteiro que indica o estado atual'],
                  ['~3', 'Quantidade de commits a serem desfeitos', 'no-space'],
                ]}
              />
            ),
          },
          {
            description: '# Desfazendo o último commit',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['HEAD', 'Ponteiro que indica o estado atual'],
                  ['^', 'O circunflexo é um atalho para o último commit', 'no-space'],
                ]}
              />
            ),
          },
          {
            description: '# Desfazendo commits de forma soft',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['HEAD', 'Ponteiro que indica o estado atual'],
                  ['^', 'O circunflexo é um atalho para o último commit', 'no-space'],
                  ['--soft', 'Flag para guardar as alterações em staging'],
                ]}
              />
            ),
          },
          {
            description:
              '# Voltar para o commit excluindo os anteriores e com os arquivos do commit em Staged',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['--soft', 'Flag para guardar as alterações em staging'],
                  ['09c6d68', 'Hash (identificador) do commit de interesse'],
                ]}
              />
            ),
          },
          {
            description:
              '# Voltar para o commit excluindo os anteriores e com os arquivos do commit em Modified',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['--mixed'],
                  ['09c6d68', 'Hash (identificador) do commit de interesse'],
                ]}
              />
            ),
          },
          {
            description:
              '# Voltar para o commit excluindo os anteriores e excluindo os arquivos do commit (Cuidado)',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['reset', 'Comando para restaurar um estado anterior'],
                  ['--hard'],
                  ['09c6d68', 'Hash (identificador) do commit de interesse'],
                ]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Ramificações e Mesclagem',
    commands: [
      {
        description: 'Listar todas as branch e mostrar a branch ativa.',
        code: (
          <CodeComposer
            compose={[['git'], ['branch', 'Comando para listar as branches']]}
          />
        ),
        examples: [
          {
            description: 'Criar uma branch',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['branch', 'Comando para criar um novo branch'],
                  ['new-feature', 'Nome do novo branch'],
                ]}
              />
            ),
          },
          {
            description: 'Apagar uma branch localmente',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['branch', 'Comando para lidar com branches'],
                  ['-d', 'Flag para apagar uma branch localmente'],
                  ['new-feature', 'Nome do branch'],
                ]}
              />
            ),
          },
          {
            description: 'Apagar uma branch forçadamente',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['branch', 'Comando para lidar com branches'],
                  ['-D', 'Flag para apagar uma branch forçadamente'],
                  ['new-feature', 'Nome do branch'],
                ]}
              />
            ),
          },
        ],
        hints: [
          [
            '✨ Git branch [NOME DA BRANCH] apenas cria o branch, ainda é preciso trocar de branch para fazer commits',
          ],
        ],
      },
      {
        description: 'Navegar até a branch.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['checkout', 'Comando para mudar de branch'],
              ['new-feature', 'Nome do branch de destino'],
            ]}
          />
        ),
        examples: [
          {
            description: 'Criar uma branch e navegar para ela',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['checkout', 'Comando para mudar de branch'],
                  ['-b', 'Flag para criar uma branch'],
                  ['new-feature', 'Nome do branch de destino'],
                ]}
              />
            ),
          },
          {
            description: 'Descartar as mudanças naquele arquivo',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['checkout', 'Comando para navegar até o arquivo'],
                  ['arquivo.txt', 'Nome completo do arquivo com sua extensão'],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Navegar até a branch.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['switch', 'Comando para mudar de branch'],
              ['new-feature', 'Nome do branch de destino'],
            ]}
          />
        ),
        examples: [
          {
            description: 'Criar uma branch e navegar para ela',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['switch', 'Comando para mudar de branch'],
                  ['-c', 'Flag para criar uma branch'],
                  ['new-feature', 'Nome do branch de destino'],
                ]}
              />
            ),
          },
          {
            description: 'Descartar as mudanças naquele arquivo',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['checkout', 'Comando para navegar até o arquivo'],
                  ['arquivo.txt', 'Nome completo do arquivo com sua extensão'],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Juntar os dados de uma branch selecionada para a branch atual.',
        code: ['git merge [NOME DA BRANCH]'],
      },
      {
        description: 'Criar um Stash das mudanças.',
        code: (
          <CodeComposer
            compose={[['git'], ['stash', 'Comando para gerenciar stashes']]}
          />
        ),
        examples: [
          {
            description: '# Criar um Stash das mudanças e salvar uma mensagem',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  ['-m', 'Flag para escrever uma mensagem de stash'],
                  ['"Mensagem"', 'Mensagem descrevendo as mudanças'],
                ]}
              />
            ),
          },
          {
            description: '# Aplicar um Stash sem remover ele da pilha',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  [
                    'apply',
                    'Comando para aplicar as mudanças de um stash sem remover ele da pilha',
                  ],
                  ['stash@{2}', 'Índice do penúltimo stash'],
                ]}
              />
            ),
          },
          {
            description: '# Listar todos os Stash',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  ['list', 'Comando para listar os stashes'],
                ]}
              />
            ),
          },
          {
            description: '# Removendo um stash da pilha e aplicando-o',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  ['pop', 'Comando para remover o stash da pilha e aplicar as mudanças'],
                ]}
              />
            ),
          },
          {
            description: '# Jogando um stash fora',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  ['drop', 'Comando para remover o stash da pilha'],
                  ['stash@{2}', 'Índice do penúltimo stash'],
                ]}
              />
            ),
          },
          {
            description: '# Limpar todos os Stash',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['stash', 'Comando para gerenciar stashes'],
                  ['clear', 'Comando para limpar todos os stashes'],
                ]}
              />
            ),
          },
        ],
        information: [['Sem passar um índice a stash mais recente é usada']],
      },
      {
        description: 'Listar as tag existentes.',
        code: ['git tag'],
        examples: [
          {
            description: 'Criar uma tag',
            code: (
              <CodeComposer
                compose={[['git'], ['tag'], ['-a'], ['[TAG]'], ['-m'], ['"Descrição"']]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Compartilhamento e atualização de projetos',
    commands: [
      {
        description: 'Enviar commits de uma branch para um repositório remoto.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['push', 'Comando para enviar alterações'],
              ['origin', 'Nome do repositório remoto que irá receber as alterações'],
              ['main', 'Nome do branch local que irá enviar as alterações'],
            ]}
          />
        ),
        examples: [
          {
            description: 'Enviar tags de uma branch para um repositório remoto',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['push', 'Comando para enviar alterações'],
                  ['--set-upstream', 'Flag para criar o rastreamento'],
                  ['origin', 'Nome do repositório remoto'],
                  ['main', 'Nome do branch para fazer o acompanhamento'],
                ]}
              />
            ),
          },
          {
            description: 'Enviar tags de uma branch para um repositório remoto',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['push', 'Comando para enviar alterações'],
                  ['origin', 'Nome do repositório remoto que irá receber as tags'],
                  ['main', 'Nome do branch local que irá enviar as tags'],
                  ['--tags', 'Flag para enviar somente as tags'],
                ]}
              />
            ),
          },
          {
            description: 'Apagar branches remotos',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['push', 'Comando para enviar alterações'],
                  ['origin', 'Nome do repositório remoto'],
                  [':main', 'Nome do branch remoto que irá ser apagado'],
                ]}
              />
            ),
          },
          {
            description: 'Apagar tags remotos',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['push', 'Comando para enviar alterações'],
                  ['origin', 'Nome do repositório remoto'],
                  [':1.0.0', 'Nome da tag remoto que irá ser apagado'],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Listar todos os repositórios remotos.',
        code: (
          <CodeComposer
            compose={[['git'], ['remote', 'Comando para gerenciar remotes']]}
          />
        ),
        examples: [
          {
            description: 'Listar todos os repositórios remotos com mais detalhes',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['remote', 'Comando para gerenciar remotes'],
                  ['-v', 'Flag para mostrar detalhes do remote'],
                ]}
              />
            ),
          },
          {
            description: 'Conectar um repositório remoto',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['remote', 'Comando para gerenciar remotes'],
                  ['add', 'Comando para adicionar um remote'],
                  ['origin', 'Nome do novo repositório remoto'],
                  [
                    'https://github.com/username/project.git',
                    'Caminho do repositório utilizando HTTPS',
                  ],
                ]}
              />
            ),
          },
          {
            description: 'Renomear um repositório remoto',
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['remote', 'Comando para gerenciar remotes'],
                  ['rename', 'Comando para renomear um remote'],
                  ['origin', 'Nome atual do remote'],
                  ['destiny', 'Novo nome para o remote'],
                ]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Inspeção e Comparação',
    commands: [
      {
        description: 'Visualizar as modificações feita em um commit.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['show', 'Comando que mostra detalhes de um commit'],
              ['09c6d68', 'Hash (identificador) do commit de interesse'],
            ]}
          />
        ),
        information: [['Na ausência de um hash o último commit será mostrado']],
      },
      {
        description: 'Visualizar o histórico de commits.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              [
                'log',
                'Comando para mostrar uma lista interativa de commits com o hash e a mensagem de cada commit',
              ],
            ]}
          />
        ),
        examples: [
          {
            description: ['# Visualizar o histórico de commits em gráfico'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  [
                    'log',
                    'Comando para mostrar uma lista interativa de commits com o hash e a mensagem de cada commit',
                  ],
                  ['--graph', 'Flag para visualizar em gráfico'],
                ]}
              />
            ),
          },
          {
            description: ['# Filtrar o histórico de commits pelo autor'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  [
                    'log',
                    'Comando para mostrar uma lista interativa de commits com o hash e a mensagem de cada commit',
                  ],
                  [
                    '--author="John Doe"',
                    'Flag para filtrar pelo autor mais o nome do autor',
                  ],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Visualizar resumidamente o histórico de commits.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['shortlog', 'Comando para mostrar uma lista de commits resumidos'],
            ]}
          />
        ),
        examples: [
          {
            description: [
              '# Visualizar o histórico de commits pela quantidade de commits dos autores',
            ],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['shortlog', 'Comando para mostrar uma lista de commits resumidos'],
                  ['-sn', 'Flag para visualizar os commits pela quantidade'],
                ]}
              />
            ),
          },
        ],
      },
    ],
  },
  {
    title: 'Aplicação de patches',
    commands: [
      {
        description: 'Juntar os dados de uma branch selecionada para a branch atual.',
        code: (
          <CodeComposer
            compose={[
              ['git'],
              ['rebase', 'Comando para reaplicar commits'],
              ['new-feature', 'Nome do branch mais atualizado'],
            ]}
          />
        ),
        examples: [
          {
            description: [
              '# Juntar os dados de uma branch selecionada para outra branch selecionada',
            ],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['rebase', 'Comando para reaplicar commits'],
                  ['new-feature', 'Nome do branch mais atualizado'],
                  ['main', 'Nome do branch para atualizar'],
                ]}
              />
            ),
          },
          {
            description: ['# Corrigindo a origem do branch'],
            code: (
              <CodeComposer
                compose={[
                  ['git'],
                  ['rebase', 'Comando para reaplicar commits'],
                  ['--onto', 'Flag para iniciar a nova origem'],
                  ['new-feature', 'Nome do branch que deve ser a origem'],
                  ['testing-001', 'Nome do branch que possui a origem incorreta'],
                  ['main', 'Nome do branch que precisa de correção'],
                ]}
              />
            ),
          },
        ],
      },
      {
        description: 'Desfaz um commit sem remover o commit do histórico.',
        code: ['git revert [HASH]'],
      },
    ],
  },
] as referencesTypes

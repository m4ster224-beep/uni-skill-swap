# Skill Swap - Plataforma de Troca de Habilidades Universitárias

Uma plataforma para conectar estudantes universitários que desejam trocar conhecimentos e habilidades complementares.

## Sobre o Projeto

O Skill Swap resolve o problema da dificuldade de encontrar colegas com habilidades complementares, facilitando a colaboração entre alunos através de um sistema de matching baseado em interesses e conhecimentos.

## Funcionalidades

- **Cadastro e Login**: Sistema de autenticação com informações do curso e período
- **Perfil de Usuário**: Cadastro de habilidades que possui e habilidades de interesse
- **Sistema de Busca**: Encontre pessoas com habilidades específicas que você deseja aprender
- **Matching**: Conecte-se automaticamente com pessoas que têm interesses complementares
- **Dashboard**: Interface intuitiva para gerenciar conexões e habilidades

## Tecnologias Utilizadas

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Ícones**: Lucide React
- **Roteamento**: React Router

## Como Executar o Projeto

### Pré-requisitos

- Node.js e npm instalados - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Passos para executar:

```sh
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Navegue até o diretório do projeto
cd skill-swap

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes de interface (shadcn/ui)
│   ├── Header.tsx      # Cabeçalho da aplicação
│   └── HeroSection.tsx # Seção hero da landing page
├── pages/              # Páginas da aplicação
│   ├── Index.tsx       # Página inicial/landing
│   ├── Login.tsx       # Página de login
│   ├── Register.tsx    # Página de cadastro
│   └── Dashboard.tsx   # Dashboard principal
├── hooks/              # Custom hooks
├── lib/                # Utilitários e configurações
└── assets/             # Imagens e recursos estáticos
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
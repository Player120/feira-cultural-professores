## REQUISITOS FUNCIONAIS ##

# PROFESSORES
# [] Deve ser possível cadastrar novos professores
# [] O cadastro deve seguir a seguinte estrutura: 
{
    rm: number
    nome: string
    area: string
    disciplina: Array<string>
    email: string
    aceitaOrientar: boolean
    aceitaAvaliar: boolean
}
# Não deve ser possível cadastrar mais de um professor com o mesmo rm

# [] Não deve ser possível cadastrar novos professores sem que sejam informados os dados de: rm, nome, area e disciplina, ficando como opcional apenas o email. Os valores de aceita orientar e aceita avaliar, quando não informados, serão false por padrão

# [X] Deve ser possível listar os professores cadastrados no sistema.

# [] Deve ser possível listar os professores cadastrados no sistema por area.

# [] Deve ser possível listar os professores cadastrados no sistema por disciplina.

# [] Deve ser possível listar os professores cadastrados no sistema por aceite de orientação.

# [] Deve ser possível listar os professores cadastrados no sistema por aceite de avaliação.


--Categoria
INSERT INTO categoria(id, categoria_nome)  values (0, 'Favoritos');

--Contatos
INSERT INTO contato(id, contato_nome, contato_cpf, contato_email,
contato_data_nascimento, contato_endereco, contato_telefone_fixo, contato_celular,
contato_categoria, contato_autoriza_email)  values (0, 'joao', '11111111111', 'joao@email',
'15/01/1999', 'rua12', '38445654', '985763251', 1, true);

INSERT INTO contato(id, contato_nome, contato_cpf, contato_email,
contato_data_nascimento, contato_endereco, contato_telefone_fixo, contato_celular,
contato_categoria, contato_autoriza_email)  values (1, 'vitor', '11111111111', 'vitor@email',
'15/02/1999', 'rua11', '38445654', '985763251', 1, true);

--Usuarios
INSERT INTO usuario(id, contato_nome, contato_cpf, contato_email,
contato_data_nascimento, contato_endereco, contato_telefone_fixo, contato_celular,
contato_categoria, contato_autoriza_email)  values (1, 'vitor', '11111111111', 'vitor@email',
'15/02/1999', 'rua11', '38445654', '985763251', 1, true);


--Categoria
INSERT INTO categoria(id, categoria_nome)  values (0, 'Favoritos');

--Contatos
INSERT INTO contato(id,  categoria_id, contato_nome, contato_cpf_cnpj, contato_email,
contato_data_nascimento, contato_endereco, contato_telefone_fixo, contato_celular,
contato_autoriza_email)  values (0, 0, 'joao', '11111111111', 'joao@email',
'15/01/1999', 'rua12', '38445654', '985763251', true);

INSERT INTO contato(id, categoria_id, contato_nome, contato_cpf_cnpj, contato_email,
contato_data_nascimento, contato_endereco, contato_telefone_fixo, contato_celular,
contato_autoriza_email)  values (1, 0, 'vitor', '11111111111', 'vitor@email',
'15/02/1999', 'rua11', '38445654', '985763251', true);

--Usuarios
INSERT INTO usuario(id, usuario_nome, usuario_cpf, usuario_email,
usuario_data_nascimento, usuario_endereco, usuario_telefone_fixo, usuario_celular,
usuario_funcao, usuario_senha)  values (1, 'admin', '11111111111', 'admin@email',
'15/03/1999', 'rua10', '38445654', '985763251', 'ADMINISTRADOR', '1234');


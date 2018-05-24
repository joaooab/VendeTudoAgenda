create table categoria (
    id int not null,
    categoria_nome text not null,
    PRIMARY KEY (id)
)

create table contato (
    id int not null,
    contato_nome text not null,
    contato_cpf varchar(11) not null,
    contato_email text not null,
    contato_data_nascimento date not null,
    contato_endereco text not null,
    contato_telefone_fixo varchar(10),
    contato_celular varchar(11) not null,
    contato_categoria int not null,
    contato_autoriza_email bool not null,
    PRIMARY KEY (id),
    FOREIGN KEY (contato_categoria) REFERENCES categoria(id)
)

create table usuario (
    id int not null,
    usuario_nome text not null,
    usuario_cpf varchar(11) not null,
    usuario_email text not null,
    usuario_data_nascimento date not null,
    usuario_endereco text not null,
    usuario_telefone_fixo varchar(8),
    usuario_celular varchar(11) not null,
    usuario_funcao text not null,
    usuario_senha text not null,
    PRIMARY KEY (id)
)

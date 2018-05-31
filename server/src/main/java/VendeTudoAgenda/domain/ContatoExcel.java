package VendeTudoAgenda.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContatoExcel {
    private String nome;
    private String categoria;
    private Long quantidadeLigacoes;
}

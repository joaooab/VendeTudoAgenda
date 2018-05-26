package VendeTudoAgenda.core.services;

import VendeTudoAgenda.domain.Categoria;
import VendeTudoAgenda.core.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public void update(Categoria categoria){
        if(!"".equals(categoria.getNome())){

        }
    }
}

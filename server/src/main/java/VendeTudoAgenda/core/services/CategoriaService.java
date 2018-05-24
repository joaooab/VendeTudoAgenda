package VendeTudoAgenda.core.services;

import VendeTudoAgenda.domain.Categoria;
import VendeTudoAgenda.core.repository.CategoriaRepository;

import java.util.List;

public class CategoriaService {

    private CategoriaRepository categoriaRepository;

    public List<Categoria> obtemCategorias() {
        return (List<Categoria>) categoriaRepository.findAll();
    }
}

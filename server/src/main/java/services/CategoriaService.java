package services;

import domain.Categoria;
import repository.CategoriaRepository;

import java.util.List;

public class CategoriaService {

    private CategoriaRepository categoriaRepository;

    public List<Categoria> obtemCategorias(){
        return (List<Categoria>) categoriaRepository.findAll();
    }
}

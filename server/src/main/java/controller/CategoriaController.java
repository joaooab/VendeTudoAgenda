package controller;

import domain.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CategoriaController {

    @Autowired
    Categoria categoria;

    @RequestMapping("/")
    public void index() {
        System.out.println("Inicio");
    }

}

package VendeTudoAgenda;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class VendeTudoAgendaApplication {

	public static void main(String[] args) {
		SpringApplication.run(VendeTudoAgendaApplication.class, args);
	}

//	@Override
//    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
//        return application.sources(VendeTudoAgendaApplication.class);
//    }
}

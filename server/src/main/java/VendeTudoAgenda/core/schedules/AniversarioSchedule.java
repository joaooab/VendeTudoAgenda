package VendeTudoAgenda.core.schedules;

import VendeTudoAgenda.core.repository.UsuarioRepository;
import VendeTudoAgenda.domain.usuario.Usuario;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@EnableScheduling
public class AniversarioSchedule {

    private UsuarioRepository usuarioRepository;
    private static final String TIME_ZONE = "America/Sao_Paulo";

    @Scheduled(cron = "0 0 12 * * *", zone = TIME_ZONE)
    public void enviarEmailAniversario() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        Date dataHoje = new Date();

        for (Usuario usuario : usuarios) {
            if (usuario.getDataNascimento().equals(dataHoje)) {
                //TODO acionar o EmailService para enviar o email
            }
        }

    }

    public boolean mesmaData(Date aniversario){
        Calendar calendarHoje = Calendar.getInstance();
        calendarHoje.setTime(new Date());

        Calendar calendarAniversario = Calendar.getInstance();
        calendarAniversario.setTime(aniversario);

        return (calendarHoje.get(Calendar.MONTH) == calendarAniversario.get(Calendar.MONTH) &&
                calendarHoje.get(Calendar.DAY_OF_MONTH) == calendarAniversario.get(Calendar.DAY_OF_MONTH));
    }
}

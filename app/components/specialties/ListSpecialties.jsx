import {
    FaBaby, // Pediatría
    FaUserMd, // Medicina Interna, Medicina Familiar, Médicos especializados
    FaStethoscope, // Ecografía, Kinesiólogos
    FaTooth, // Odontólogos
    FaUserNurse, // Enfermeros, Técnicos en Enfermería de Nivel Superior
    FaMicroscope, // Tecnólogos Médicos
    FaFlask, // Químicos Farmacéuticos
    FaHandHoldingMedical, // Terapeutas Ocupacionales
    FaComments, // Fonoaudiólogos
    FaAppleAlt, // Nutricionistas
    FaBrain, // Psicólogos
    FaPeopleArrows, // Trabajadores Sociales
    FaWalking, // Podólogas
    FaUsersCog, // Personal Administrativo
    FaBroom, // Auxiliares de Servicio (No hay un ícono directo, este es sugerido por el aspecto de servicio/soporte)
} from 'react-icons/fa';
import { MdPregnantWoman } from 'react-icons/md';

export const specialties = [
    { icon: FaBaby, title: 'Pediatría' },
    { icon: FaUserMd, title: 'Medicina Interna' },
    { icon: FaStethoscope, title: 'Ecografía' },
    { icon: FaUserMd, title: 'Medicina Familiar' },
    { icon: FaTooth, title: 'Odontología' },
    { icon: FaUserNurse, title: 'Enfermería' },
    { icon: MdPregnantWoman, title: 'Matronería' },
    { icon: FaMicroscope, title: 'Tecnología Médica' },
    { icon: FaFlask, title: 'Química Farmacéutica' },
    { icon: FaHandHoldingMedical, title: 'Terapia Ocupacional' },
    { icon: FaComments, title: 'Fonoaudiología' },
    { icon: FaAppleAlt, title: 'Nutrición' },
    { icon: FaBrain, title: 'Psicología' },
    { icon: FaPeopleArrows, title: 'Trabajo Social' },
    { icon: FaWalking, title: 'Podología' },
    { icon: FaUserNurse, title: 'Técnicos en Enfermería de Nivel Superior' },
    { icon: FaUsersCog, title: 'Personal Administrativo' },
    { icon: FaBroom, title: 'Auxiliares de Servicio' },
];

export default function ListSpecialties() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-6">
            {specialties.map((esp, index) => (
                <div key={index} className="flex items-center gap-2">
                    <esp.icon className="text-3xl text-third" />
                    <span className="text-description">{esp.title}</span>
                </div>
            ))}
        </div>
    );
}

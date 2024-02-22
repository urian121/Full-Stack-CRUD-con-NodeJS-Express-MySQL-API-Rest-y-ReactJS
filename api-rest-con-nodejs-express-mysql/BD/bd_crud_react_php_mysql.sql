
CREATE TABLE `tbl_alumnos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_alumno` varchar(255) DEFAULT NULL,
  `email_alumno` varchar(255) DEFAULT NULL,
  `curso_alumno` varchar(50) DEFAULT NULL,
  `sexo_alumno` varchar(20) DEFAULT NULL,
  `habla_ingles` tinyint(1) DEFAULT NULL,
  `fecha_registro` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `tbl_alumnos` (`id`, `nombre_alumno`, `email_alumno`, `curso_alumno`, `sexo_alumno`, `habla_ingles`, `fecha_registro`)
VALUES
	(1,'Braudin','braudin@gmail.com','React Native','M',0,'2024-02-18 20:49:51'),
	(4,'Any Luz','any@gmail.com','React Native','F',0,'2024-02-18 20:59:31'),
	(10,'Alejandro','joslito@gmail.com','NodeJS','masculino',1,'2024-02-19 21:40:42'),
	(11,'bonito editado','josl444ito@gmail.com','Python','masculino',0,'2024-02-19 22:26:28'),
	(15,'alumno nuevo','nuevo@gmail.com','Python','masculino',1,'2024-02-20 15:28:08'),
	(16,'Urian Viera','urianviera@gmail.com','ReactJS','masculino',0,'2024-02-20 20:10:32'),
	(19,'Jesus','jesus@gmail.com','React','F',0,'2024-02-21 20:37:20');

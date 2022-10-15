CREATE TABLE Pais(
	Id int not null PRIMARY KEY,
	Nombre varchar(40) not null,
	CopasGanadas int not null,
	RankingFifa int not null
);

CREATE TABLE Equipo(
	Id int NOT NULL PRIMARY KEY,
	Nombre VARCHAR(60) NOT NULL,
	Fk_IdPais int NOT NULL,
	FOREIGN KEY (Fk_IdPais) REFERENCES Pais(Id)
);
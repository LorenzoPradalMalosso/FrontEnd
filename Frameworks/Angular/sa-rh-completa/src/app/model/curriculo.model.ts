export class Curriculo {
  constructor(
    public id: number,
    public usuarioId: number,
    public nomeCompleto: string,
    public email: string,
    public telefone: string,
    public cidade: string,
    public estado: string,
    public cargoDesejado: string,
    public resumoProfissional: string,
    public formacoes: {
      curso: string;
      instituicao: string;
      nivel: string;
      anoConclusao: number;
    }[],
    public experiencias: {
      empresa: string;
      cargo: string;
      descricao: string;
      dataInicio: string;
      dataFim: string;
    }[],
    public habilidades: string[],
    public idiomas: string[],
    public linkedin: string,
    public github: string,
  ) {}

  // Métodos
  // Mapeamento de Dados da API (toMap e fromMap)
  // toMap: OBJ => API
  toMap(): { [key: string]: any } {
    const data: { [key: string]: any } = {
      usuarioId: this.usuarioId,
      nomeCompleto: this.nomeCompleto,
      email: this.email,
      telefone: this.telefone,
      cidade: this.cidade,
      estado: this.estado,
      cargoDesejado: this.cargoDesejado,
      resumoProfissional: this.resumoProfissional,
      formacoes: this.formacoes,
      experiencias: this.experiencias,
      habilidades: this.habilidades,
      idiomas: this.idiomas,
      linkedin: this.linkedin,
      github: this.github,
    };

    if (this.id && this.id > 0) {
      data['id'] = this.id;
    }

    return data;
  }

  // fromMap: API => OBJ
  fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.usuarioId,
      map.nomeCompleto,
      map.email,
      map.telefone,
      map.cidade,
      map.estado,
      map.cargoDesejado,
      map.resumoProfissional,
      map.formacoes || [],
      map.experiencias || [],
      map.habilidades || [],
      map.idiomas || [],
      map.linkedin || '',
      map.github || '',
    );
  }
}

export interface Pessoas {
  id: number
  nome: string
  idade: number
  sexo: string
  vivo: boolean
  urlFoto: string
  ultimaOcorrencia: UltimaOcorrencia
}

export interface UltimaOcorrencia {
  dtDesaparecimento: string
  dataLocalizacao: any
  encontradoVivo: boolean
  localDesaparecimentoConcat: string
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDto
  listaCartaz: any
  ocoId: number
}

export interface OcorrenciaEntrevDesapDto {
  informacao: string
  vestimentasDesaparecido: string
}

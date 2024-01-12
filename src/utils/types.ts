export interface Pessoas {
  content: DadosPessoais[]
  pageable: Pageable
  totalPages: number
  totalElements: number
  last: boolean
  numberOfElements: number
  first: boolean
  sort: Sort2
  number: number
  size: number
  empty: boolean
}

export interface DadosPessoais {
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

export interface Pageable {
  sort: Sort
  pageNumber: number
  pageSize: number
  offset: number
  paged: boolean
  unpaged: boolean
}

export interface Sort {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}

export interface Sort2 {
  unsorted: boolean
  sorted: boolean
  empty: boolean
}

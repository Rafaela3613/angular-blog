import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { values } from 'lodash';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string ="https://portogente.com.br/images/Microsoft_2.jpg"
  contentTitle: string = "Mulheres na TI:Como a participação feminina contrubui para o avanço da área"
  contentDescription: string = "No mundo da Tecnologia da Informação, as mulheres têm moldado um futuro inovador.Elas desafiam fronteiras, quebram estereótipos e, com sua criatividade e expertise técnica,deixam uma marca indelével no campo da tecnologia.Cada linha de código, cada algoritmo refinado e cada inovação revolucionária é um reflexo do talento e da determinação das mulheresno TI. Sua presença diversificada traz uma riqueza de perspectivas que impulsiona a criatividade e aresolução de problemas de maneiras inesperadas e poderosas.Mais do que simplesmente quebrar barreiras, essas mulheres estão construindo pontes para um futuro onde a igualdade degênero e a diversidade são a base da inovação. Seu impacto não é apenas no presente, mas na inspiração para as próximas gerações,mostrando que não há limites para o que uma mente determinada e visionária pode alcançar no mundo da tecnologia.A participação feminina na área de Tecnologia da Informação é um catalisador fundamental para o avanço e a inovação contínua nesse campo dinâmico. A diversidade de perspectivas, habilidades e experiências que as mulheres trazem para a TI é um ingrediente essencial para impulsionar o progresso.As mulheres na TI oferecem uma gama única de habilidades, desde a resolução criativa de problemas até a capacidade de colaborar em equipe e enxergar desafios de maneira holística. Sua presença promove um ambiente mais inclusivo e propício para a criação de soluções mais abrangentes e eficazes.Além disso, a representação feminina na TI é crucial para inspirar futuras gerações de mulheres a seguirem carreiras STEM (Ciência, Tecnologia, Engenharia e Matemática). Ao verem mulheres atuando e liderando na área, meninas são motivadas a explorar seu potencial, aumentando a diversidade e a riqueza de talentos na indústria.A contribuição das mulheres na TI não apenas diversifica o ambiente de trabalho, mas também melhora a qualidade das soluções tecnológicas. A variedade de perspectivas impulsiona a inovação, pois diferentes experiências e visões são integradas ao desenvolvimento de produtos e serviços, tornando-os mais adaptados e inclusivos para uma audiência global.Portanto, a participação das mulheres na TI não é apenas um imperativo de igualdade, mas uma necessidade para impulsionar o progresso, promover a inovação e criar um ambiente mais rico e inclusivo para todos na indústria tecnológica."


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}

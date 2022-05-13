var lista_prac_test = [
    {audio:'audio_problems/Prac_PT_F_12x3.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">trinta e seis</div><div class="answer_right">quarenta e seis</div>', correct_answ:'q', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_96db3.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e dois</div><div class="answer_right">trinta e dois</div>', correct_answ:'p', condition:'complex_division'}
];

var lista_prac = [
    {audio:'audio_problems/Prac_PT_F_12x3.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">trinta e seis</div><div class="answer_right">quarenta e seis</div>', correct_answ:'q', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_EN_M_21x4.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">eighty-four</div><div class="answer_right">eighty-two</div>', correct_answ:'q', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_EN_M_24x4.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">ninety-eight</div><div class="answer_right">ninety-six</div>', correct_answ:'p', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_24+9.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">trinta e três</div><div class="answer_right">trinta e um</div>', correct_answ:'q', condition:'complex_sum'},
    {audio:'audio_problems/Prac_EN_M_34-6.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">twenty-nine</div><div class="answer_right">twenty-eight</div>', correct_answ:'p', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_PT_F_37x2.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e três</div><div class="answer_right">setenta e quatro</div>', correct_answ:'p', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_38+2.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quarenta</div><div class="answer_right">trinta e nove</div>', correct_answ:'q', condition:'complex_sum'},
    {audio:'audio_problems/Prac_EN_M_47+5.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">fifty-three</div><div class="answer_right">fifty-two</div>', correct_answ:'p', condition:'complex_sum'},
    {audio:'audio_problems/Prac_PT_F_53-9.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quarenta e quatro</div><div class="answer_right">quarenta e dois</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_EN_M_56+7.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sixty-five</div><div class="answer_right">sixty-three</div>', correct_answ:'p', condition:'complex_sum'},
    {audio:'audio_problems/Prac_PT_F_61-3.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e oito</div><div class="answer_right">sessenta</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_PT_F_64db4.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">seis</div><div class="answer_right">dezesseis</div>', correct_answ:'p', condition:'complex_division'},
    {audio:'audio_problems/Prac_EN_M_78db6.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">fourteen</div><div class="answer_right">thirteen</div>', correct_answ:'p', condition:'complex_division'},
    {audio:'audio_problems/Prac_EN_M_84db4.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">twenty-one</div><div class="answer_right">thirty-one</div>', correct_answ:'q', condition:'complex_division'},
    {audio:'audio_problems/Prac_EN_M_87-8.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">seventy-nine</div><div class="answer_right">sixty-nine</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_PT_F_96db3.mp3', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e dois</div><div class="answer_right">trinta e dois</div>', correct_answ:'p', condition:'complex_division'}
];


var lista_prac_show_problems = [
    {audio:'audio_problems/Prac_PT_F_12x3.mp3', lang:'PT', prompt:'<div class="question">12 x 3<br>Qual a resposta correta?</div><p></p><div class="answer_left">trinta e seis</div><div class="answer_right">quarenta e seis</div>', correct_answ:'q', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_EN_M_21x4.mp3', lang:'EN', prompt:'<div class="question">21 x 4<br>Qual a resposta correta?</div><p></p><div class="answer_left">eighty-four</div><div class="answer_right">eighty-two</div>', correct_answ:'q', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_24+9.mp3', lang:'PT', prompt:'<div class="question">24 + 9<br>Qual a resposta correta?</div><p></p><div class="answer_left">trinta e três</div><div class="answer_right">trinta e um</div>', correct_answ:'q', condition:'complex_sum'},
    {audio:'audio_problems/Prac_EN_M_34-6.mp3', lang:'EN', prompt:'<div class="question">34 - 6<br>Qual a resposta correta?</div><p></p><div class="answer_left">twenty-nine</div><div class="answer_right">twenty-eight</div>', correct_answ:'p', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_EN_M_47+5.mp3', lang:'EN', prompt:'<div class="question">47 + 5<br>Qual a resposta correta?</div><p></p><div class="answer_left">fifty-three</div><div class="answer_right">fifty-two</div>', correct_answ:'p', condition:'complex_sum'},
    {audio:'audio_problems/Prac_PT_F_53-9.mp3', lang:'PT', prompt:'<div class="question">53 - 9<br>Qual a resposta correta?</div><p></p><div class="answer_left">quarenta e quatro</div><div class="answer_right">quarenta e dois</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_PT_F_64db4.mp3', lang:'PT', prompt:'<div class="question">64 ÷ 4<br>Qual a resposta correta?</div><p></p><div class="answer_left">seis</div><div class="answer_right">dezesseis</div>', correct_answ:'p', condition:'complex_division'},
    {audio:'audio_problems/Prac_EN_M_78db6.mp3', lang:'EN', prompt:'<div class="question">78 ÷ 6<br>Qual a resposta correta?</div><p></p><div class="answer_left">fourteen</div><div class="answer_right">thirteen</div>', correct_answ:'p', condition:'complex_division'},
];

var lista_prac_hide_problems = [
    {audio:'audio_problems/Prac_EN_M_24x4.mp3', lang:'EN', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">ninety-eight</div><div class="answer_right">ninety-six</div>', correct_answ:'p', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_37x2.mp3', lang:'PT', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e três</div><div class="answer_right">setenta e quatro</div>', correct_answ:'p', condition:'complex_multiplication'},
    {audio:'audio_problems/Prac_PT_F_38+2.mp3', lang:'PT', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quarenta</div><div class="answer_right">trinta e nove</div>', correct_answ:'q', condition:'complex_sum'},
    {audio:'audio_problems/Prac_EN_M_56+7.mp3', lang:'EN', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sixty-five</div><div class="answer_right">sixty-three</div>', correct_answ:'p', condition:'complex_sum'},
    {audio:'audio_problems/Prac_PT_F_61-3.mp3', lang:'PT', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e oito</div><div class="answer_right">sessenta</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_EN_M_87-8.mp3', lang:'EN', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">seventy-nine</div><div class="answer_right">sixty-nine</div>', correct_answ:'q', condition:'complex_subtraction'},
    {audio:'audio_problems/Prac_EN_M_84db4.mp3', lang:'EN', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">twenty-one</div><div class="answer_right">thirty-one</div>', correct_answ:'q', condition:'complex_division'},
    {audio:'audio_problems/Prac_PT_F_96db3.mp3', lang:'PT', prompt:'<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e dois</div><div class="answer_right">trinta e dois</div>', correct_answ:'p', condition:'complex_division'}

];
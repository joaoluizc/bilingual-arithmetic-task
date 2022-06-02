var lista_stimuli = [
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_6+9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">fifteen</div><div class="answer_right">thirteen</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_3+7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">ten</div><div class="answer_right">nine</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_8+9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighteen</div><div class="answer_right">seventeen</div>', correct_answ: 'p', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_4+9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirteen</div><div class="answer_right">eleven</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_5+8.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirteen</div><div class="answer_right">twelve</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_4+8.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eleven</div><div class="answer_right">twelve</div>', correct_answ: 'p', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_2+7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">nove</div><div class="answer_right">onze</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_7+9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dezesseis</div><div class="answer_right">dezoito</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_3+9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">treze</div><div class="answer_right">doze</div>', correct_answ: 'p', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_5+9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">catorze</div><div class="answer_right">quinze</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_7+8.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dezessete</div><div class="answer_right">quinze</div>', correct_answ: 'p', condition: 'simple_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_6+8.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">catorze</div><div class="answer_right">doze</div>', correct_answ: 'q', condition: 'simple_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_8-5.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">three</div><div class="answer_right">four</div>', correct_answ: 'q', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_9-4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">four</div><div class="answer_right">five</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_9-2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">seven</div><div class="answer_right">nine</div>', correct_answ: 'q', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_8-6.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">one</div><div class="answer_right">two</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_7-4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">four</div><div class="answer_right">three</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_9-3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">six</div><div class="answer_right">eight</div>', correct_answ: 'q', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_8-3.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sete</div><div class="answer_right">cinco</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_9-7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dois</div><div class="answer_right">um</div>', correct_answ: 'q', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_9-5.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dois</div><div class="answer_right">quatro</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_8-2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sete</div><div class="answer_right">seis</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_9-6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">três</div><div class="answer_right">um</div>', correct_answ: 'q', condition: 'simple_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_8-7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">três</div><div class="answer_right">um</div>', correct_answ: 'p', condition: 'simple_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_8x2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">sixteen</div><div class="answer_right">fifteen</div>', correct_answ: 'q', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_9x2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighteen</div><div class="answer_right">nineteen</div>', correct_answ: 'q', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_7x3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">twenty-two</div><div class="answer_right">twenty-one</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_8x3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">twenty-four</div><div class="answer_right">twenty-six</div>', correct_answ: 'q', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_8x4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">twenty-two</div><div class="answer_right">thirty-two</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_9x4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirty-two</div><div class="answer_right">thirty-six</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_7x4.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e oito</div><div class="answer_right">vinte e nove</div>', correct_answ: 'q', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_8x5.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quarenta</div><div class="answer_right">quarenta e dois</div>', correct_answ: 'q', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_7x6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e dois</div><div class="answer_right">quarenta e dois</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_9x6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sessenta e quatro</div><div class="answer_right">cinquenta e quatro</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_8x7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e quatro</div><div class="answer_right">cinquenta e seis</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_9x7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e três</div><div class="answer_right">sessenta e três</div>', correct_answ: 'p', condition: 'simple_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_6db2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">three</div><div class="answer_right">one</div>', correct_answ: 'q', condition: 'simple_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_8db2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">six</div><div class="answer_right">four</div>', correct_answ: 'p', condition: 'simple_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_6db3.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dois</div><div class="answer_right">um</div>', correct_answ: 'q', condition: 'simple_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_8db4.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">três</div><div class="answer_right">dois</div>', correct_answ: 'p', condition: 'simple_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_9db3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">five</div><div class="answer_right">three</div>', correct_answ: 'p', condition: 'simple_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_4db2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">one</div><div class="answer_right">two</div>', correct_answ: 'p', condition: 'simple_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_12x7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-four</div><div class="answer_right">ninety-six</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_38x2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-six</div><div class="answer_right">seventy-six</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_29x3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-seven</div><div class="answer_right">fifty-eight</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_27x3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-four</div><div class="answer_right">eighty-one</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_35x2.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">seventy</div><div class="answer_right">sixty-eight</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_12x8.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-six</div><div class="answer_right">ninety-six</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_34x2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e oito</div><div class="answer_right">sessenta e oito</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_45x2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">oitenta e oito</div><div class="answer_right">noventa</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_12x5.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sessenta</div><div class="answer_right">setenta e dois</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_43x2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e seis</div><div class="answer_right">oitenta e seis</div>', correct_answ: 'p', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_26x3.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e oito</div><div class="answer_right">cinquenta e dois</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_39x2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e oito</div><div class="answer_right">oitenta</div>', correct_answ: 'q', condition: 'complex_multiplication' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_96db8.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">twelve</div><div class="answer_right">thirteen</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_98db7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">twenty-four</div><div class="answer_right">fourteen</div>', correct_answ: 'p', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_78db6.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirteen</div><div class="answer_right">twelve</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_80db5.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">sixteen</div><div class="answer_right">twenty-six</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_60db4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">fourteen</div><div class="answer_right">fifteen</div>', correct_answ: 'p', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_54db3.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">nineteen</div><div class="answer_right">eighteen</div>', correct_answ: 'p', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_78db2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e nove</div><div class="answer_right">trinta e nove</div>', correct_answ: 'p', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_84db7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">catorze</div><div class="answer_right">doze</div>', correct_answ: 'p', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_90db6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quinze</div><div class="answer_right">cinco</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_76db4.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">dezenove</div><div class="answer_right">dezessete</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_78db3.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e seis</div><div class="answer_right">vinte e quatro</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_96db2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">quarenta e oito</div><div class="answer_right">quarenta e seis</div>', correct_answ: 'q', condition: 'complex_division' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_13+7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">ten</div><div class="answer_right">twenty</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_29+5.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirty-four</div><div class="answer_right">thirty-three</div>', correct_answ: 'q', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_32+9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">forty</div><div class="answer_right">forty-one</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_37+5.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">forty-four</div><div class="answer_right">forty-two</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_42+9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">fifty-two</div><div class="answer_right">fifty-one</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_24+7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirty-one</div><div class="answer_right">forty-one</div>', correct_answ: 'q', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_59+2.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sessenta e um</div><div class="answer_right">sessenta e dois</div>', correct_answ: 'q', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_68+5.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e três</div><div class="answer_right">sessenta e três</div>', correct_answ: 'q', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_72+9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e nove</div><div class="answer_right">oitenta e um</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_79+3.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">noventa e dois</div><div class="answer_right">oitenta e dois</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_85+7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">noventa e quatro</div><div class="answer_right">noventa e dois</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_25+9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">trinta e dois</div><div class="answer_right">trinta e quatro</div>', correct_answ: 'p', condition: 'complex_sum' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_93-7.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">eighty-six</div><div class="answer_right">eighty-seven</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_82-9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">seventy-three</div><div class="answer_right">seventy-five</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_F_74-5.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">sixty-nine</div><div class="answer_right">sixty-eight</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_62-4.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">sixty-eight</div><div class="answer_right">fifty-eight</div>', correct_answ: 'p', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_51-8.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">forty-two</div><div class="answer_right">forty-three</div>', correct_answ: 'p', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/EN_M_47-9.mp3', list: 'list1', lang: 'EN', prompt: '<div class="question">What is the correct answer?</div><p></p><div class="answer_left">thirty-eight</div><div class="answer_right">forty-eight</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_35-6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e nove</div><div class="answer_right">dezenove</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_37-9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">vinte e oito</div><div class="answer_right">vinte e seis</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'F', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_F_91-7.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e quatro</div><div class="answer_right">oitenta e quatro</div>', correct_answ: 'p', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_85-6.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">setenta e nove</div><div class="answer_right">oitenta e um</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_71-9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">sessenta e dois</div><div class="answer_right">sessenta</div>', correct_answ: 'q', condition: 'complex_subtraction' },
    { narrator: 'M', audio: 'https://labling.ufsc.br/estudos/audio_problems/PT_M_63-9.mp3', list: 'list1', lang: 'PT', prompt: '<div class="question">Qual a resposta correta?</div><p></p><div class="answer_left">cinquenta e cinco</div><div class="answer_right">cinquenta e quatro</div>', correct_answ: 'p', condition: 'complex_subtraction' }
];
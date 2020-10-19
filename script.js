

let age = document.getElementById('age')
let salary_month = document.getElementById('salary')
let gender = document.getElementById('gender')
let experiens = document.getElementById('experiens')
let status = document.getElementById('status')
let num_credit = document.getElementById('num-credit')
let type_credit = document.getElementById('type-credit')
let nalog = document.getElementById('nalog')
let sum = document.getElementById('sum')


let error_salary = document.getElementById('error-salary')
let error_age = document.getElementById('error-age')
let error_sum = document.getElementById('error-sum')
let error_experiens = document.getElementById('error-experiens')
let error_cash = document.getElementById('error-cash')
let error_num_credit = document.getElementById('error-num-credit')
let flag = true

function CheckSalary(){
    let salary_year = Number(salary_month.value) * 12
    console.log(salary_year)
    //Ограничение по минимальному доходу: для физ. лиц 720 000 тенге в год для юр. лиц 3 000 000 тенге в год
    if(status.value=='Физическое лицо' && salary_year<720000){
        flag = false
        error_salary.style.display = 'block'
        error_salary.innerHTML = 'Минимальный ежегодный доход 720 тыс. тг для физических лиц'
    }else if(status.value=='Юридическое лицо' && salary_year<3000000){
        flag = false
        error_salary.style.display = 'block'
        error_salary.innerHTML = 'Минимальный ежегодный доход 3 млн. тг для юридических лиц'
    }
}
//Минимальный возраст для физ. лиц 18 лет
//Лицам, достигшим пенсионного возраста, кредит не выдается.
//Пенсионным возрастом считать 63 года для мужчин, 58 лет для женщин.
function Age(){
    if (status.value == 'Физическое лицо' && age.value<18){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Минимальный возраст для физических лиц - 18 лет'
    }else if (age.value >= 63 && gender.value == 'Мужской'){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Вы достигли пенсионного возраста'
    }else if (age.value >= 58 && gender.value == 'Женский'){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Вы достигли пенсионного возраста'
    }
}
//Максимальная сумма кредита: 3 000 000 тенге для физ. лиц или 30 000 000 тенге для юр. лиц.
function SumCredit(){
    if (status.value == 'Физическое лицо' && sum.value>3000000+Number(nalog.value)){
        flag = false
        error_sum.style.display = 'block'
        error_sum.innerHTML = 'Минимальная сумма кредита для физических лиц ' + (3000000+Number(nalog.value)) + ' тг'
    }else if (status.value == 'Юридическое лицо' && sum.value>30000000+Number(nalog.value)){
        flag = false
        error_sum.style.display = 'block'
        error_sum.innerHTML = 'Минимальная сумма кредита для юридических лиц ' + (30000000+Number(nalog.value)) + ' тг'
    }
}
function Experience(){
    if (status.value == 'Физическое лицо' && experiens.value < 2){
        flag = false
        error_experiens.style.display = 'block'
        error_experiens.innerHTML = 'Минимальный стаж работы 2 года'
    }
    else if(status.value == 'Юридическое лицо' && experiens.value < 5){
        flag = false
        error_experiens.style.display = 'block'
        error_experiens.innerHTML = 'Минимальный стаж работы компании 5 лет'
    }
}

function Cash() {
    if (status.value == 'Юридическое лицо' && type_credit.value == 'Наличный расчёт') {
        flag = false
        error_cash.style.display = 'block'
        error_cash.innerHTML = 'Наличный кредит выдается только физическим лицам'
    }
}

function History_credit(){
    if(num_credit.value >= 1){
        flag = false
        error_num_credit.style.display = 'block'
        error_num_credit.innerHTML = 'У вас имеются просроченные кредиты'
    }
}

function Send(){
    CheckSalary()
    Age()
    SumCredit()
    Experience()
    Cash()
    History_credit()
    if(flag){
        alert('Ваш запрос отправлен')
    }
    else{
        alert('Мы отказываем вам в кредите, идите работь дальше :)')
    }
    setTimeout(function (){
        window.location.reload()
    }, 10000)
}

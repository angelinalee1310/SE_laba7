

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


let flag = true

function Check(){
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
        error_salary.innerHTML = 'Минимальный ежегодный доход 3 млн. тг для физических лиц'
    }
    return flag
}

function Age(){
    if (status.value == 'Физическое лицо' && age.value<18){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Минимальный возраст для физических лиц - 18 лет'
    }

    else if (age.value >= 63 && gender.value == 'Мужской'){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Вы достигли пенсионного возраста'
    }
    else if (age.value >= 58 && gender.value == 'Женский'){
        flag = false
        error_age.style.display = 'block'
        error_age.innerHTML = 'Вы достигли пенсионного возраста'
    }
    return flag
}



function Send(){
    Check()
    Age()
}

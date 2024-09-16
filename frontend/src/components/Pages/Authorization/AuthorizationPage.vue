<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance, FormRules} from "element-plus";
import Api from "@/api/Api";

const ruleFormRef = ref<FormInstance>()

interface RuleForm {
    email: string,
    password: string,
}

const form = reactive<RuleForm>({
    email: '',
    password: '',
});
let errorMessage = reactive([])

const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return
    }
    await formEl.validate((isValid) => {
        if (isValid) {
            Api.get("/login", {email: form.email, password: form.password})
                .then(() => {})
                .catch(error => {
                    errorMessage = error;
                })
        }
    })
}


const rules = reactive<FormRules<RuleForm>>({
    email: [
        {required: true, message: 'Введите пожалуйста email', trigger: 'blur'},
        {type: 'email', message: 'Введите пожалуйста корректный email', trigger: 'blur'},
    ],
    password: [
        {required: true, message: 'Введите пожалуйста пароль', trigger: 'blur'},
        {min: 6, max: 20, message: 'Пароль должен содержать от 6 до 20 символов', trigger: 'blur'},
    ],
});
</script>

<template>
    <div>
        <el-alert
            type="error"
            title="Ошибка"
            :description={errorMessage}
            show-icon
            v-if="{errorMessage}"
        />
    </div>
    <div class="authorization">
        <span class="authorization-label">Авторизация</span>
        <el-form :model="form" :rules="rules" label-width="auto" ref="ruleFormRef">
            <el-form-item label="Логин:" prop="email">
                <el-input
                    placeholder="Введите логин..."
                    v-model="form.email"
                />
            </el-form-item>
            <el-form-item label="Пароль:" prop="password">
                <el-input
                    type="password"
                    placeholder="Введите пароль..."
                    v-model="form.password"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit(ruleFormRef)">Войти</el-button>
            </el-form-item>
        </el-form>
        <a href="">Забыли пароль?</a>
        <div class="reg">
            <span>Нет аккаунта? </span><a href="">Зарегистрируйтесь!</a></div>

    </div>
</template>

<style scoped>


.authorization .reg {
    background-color: #ffffff;
    margin-right: auto;
    margin-left: auto;
}

</style>
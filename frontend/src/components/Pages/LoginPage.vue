<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {FormInstance} from "element-plus";
import Api from '@/api/Api';

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive({
    email: 'ptfsapsan@mail.ru',
    password: '111222',
});
const submitForm = (form: FormInstance | undefined) => {
    if (!form) {
        return;
    }
    form.validate((valid) => {
        if (valid) {
            Api.get('/auth/login', dynamicValidateForm);
        }
    })
};
const rules = reactive({
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
    <div class="cover-container d-flex" >
        <div class="card text-center mx-auto flex-column d-flex h-100" style="width: 25rem;background-color: #1a202c">
            <div class="card-body">
                <h5 class="card-title">Авторизация</h5>
                <el-form
                    ref="formRef"
                    :model="dynamicValidateForm"
                    :rules="rules"
                >
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="dynamicValidateForm.email" placeholder="Введите email"/>
                    </el-form-item>
                    <el-form-item label="Пароль" prop="password">
                        <el-input v-model="dynamicValidateForm.password" type="password" placeholder="Введите пароль"/>
                    </el-form-item>
                    <el-button type="success" @click="submitForm(formRef)">Отправить</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
.card
    margin-top: 200px

.el-form
  display: flex
  flex-direction: column

.card-body el-button
  background-color: #1a202c
</style>
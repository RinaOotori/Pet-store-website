<script setup lang="ts">
import {reactive, ref} from 'vue';
import type {FormInstance} from "element-plus";
import Api from '@/api/Api';

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive({
    email: 'ptfsapsan@mail.ru',
    password: '111222',
    confirm: '111222',
});
const submitForm = (form: FormInstance | undefined) => {
    if (!form) {
        return;
    }
    form.validate((valid) => {
        if (valid) {
            Api.post('/auth/registration', dynamicValidateForm);
        }
    })
};

const validatePasswordConfirm = function (rule: any, value: string, callback: any) {
    if (value !== dynamicValidateForm.password) {
        callback(new Error('Пароли не совпадают'));
    } else {
        callback();
    }
}

const rules = reactive({
    email: [
        {required: true, message: 'Введите пожалуйста email', trigger: 'blur'},
        {type: 'email', message: 'Введите пожалуйста корректный email', trigger: 'blur'},
    ],
    password: [
        {required: true, message: 'Введите пожалуйста пароль', trigger: 'blur'},
        {min: 6, max: 20, message: 'Пароль должен содержать от 6 до 20 символов', trigger: 'blur'},
    ],
    confirm: [
        {required: true, message: 'Введите пароль еще раз', trigger: 'blur'},
        {validator: validatePasswordConfirm, trigger: 'blur'},
    ],
});
</script>

<template>
    <div class="cover-container d-flex">
        <div class="card text-center mx-auto flex-column d-flex h-100" style="width: 25rem;">
            <div class="card-body">
                <h5 class="card-title">Регистрация</h5>
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
                    <el-form-item label="Пароль еще раз" prop="confirm">
                        <el-input v-model="dynamicValidateForm.confirm" type="password" placeholder="Введите пароль еще раз"/>
                    </el-form-item>
                    <el-button type="success" @click="submitForm(formRef)">Отправить</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<style lang="sass">
.card
    margin-top: 220px
.el-form-item .el-form-item__label
    width: 150px
    text-align: left
    display: block
</style>
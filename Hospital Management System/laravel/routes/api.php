<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\MedicalRecordController;
use App\Http\Controllers\UserController;

Route::prefix('patients')->group(function () {
    Route::get('/', [PatientController::class, 'view']);
    Route::post('/add', [PatientController::class, 'add']);
    Route::put('/update/{id}', [PatientController::class, 'update']);
    Route::delete('/remove/{id}', [PatientController::class, 'delete']);
});

Route::prefix('doctors')->group(function () {
    Route::get('/', [DoctorController::class, 'view']);
    Route::post('/add', [DoctorController::class, 'add']);
    Route::put('/update/{id}', [DoctorController::class, 'update']);
    Route::delete('/remove/{id}', [DoctorController::class, 'delete']);
});

Route::prefix('appointments')->group(function () {
    Route::get('/', [AppointmentController::class, 'view']);
    Route::post('/add', [AppointmentController::class, 'add']);
    Route::put('/update/{id}', [AppointmentController::class, 'update']);
    Route::delete('/remove/{id}', [AppointmentController::class, 'delete']);
});

Route::prefix('medical-records')->group(function () {
    Route::get('/', [MedicalRecordController::class, 'view']);
    Route::post('/add', [MedicalRecordController::class, 'add']);
    Route::put('/update/{id}', [MedicalRecordController::class, 'update']);
    Route::delete('/remove/{id}', [MedicalRecordController::class, 'delete']);
});

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::post('/store', [UserController::class, 'store']);
    Route::put('/update/{id}', [UserController::class, 'update']);
    Route::delete('/delete/{id}', [UserController::class, 'destroy']);
});

package com.pictionaryparty.ui.main

import androidx.compose.runtime.Composable
import com.pictionaryparty.ui.main.navigation.NAV_SPLASH
import com.pictionaryparty.ui.main.navigation.CREATE_GROUP
import com.pictionaryparty.ui.main.navigation.JOIN_GROUP
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.pictionaryparty.ui.main.group.CreateGroup
import com.pictionaryparty.ui.main.group.JoinGroup

@Composable
fun MainScreen() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = NAV_SPLASH) {
        composable(NAV_SPLASH) {
            Splash(navController)
        }
        composable(CREATE_GROUP) {
            CreateGroup()
        }
        composable(JOIN_GROUP) {
            JoinGroup()
        }
    }
}
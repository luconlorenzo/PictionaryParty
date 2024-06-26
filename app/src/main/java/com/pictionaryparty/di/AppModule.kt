package com.pictionaryparty.di

import android.content.Context
import com.pictionaryparty.data.AppPreference
import com.pictionaryparty.data.RandomWordsApi
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {
    @Provides
    @Singleton
    fun provideAppPreferences(@ApplicationContext context: Context) = AppPreference(context)

    @Provides
    fun provideRandomsWordApi() = RandomWordsApi.invoke()
}
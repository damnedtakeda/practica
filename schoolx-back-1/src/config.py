from pydantic_settings import BaseSettings, SettingsConfigDict

class Configs(BaseSettings):
    port: int = 8000
    
    model_config = SettingsConfigDict(extra="ignore", env_file=".env")

configs = Configs()

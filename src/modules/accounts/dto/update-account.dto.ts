
import { Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';


export class SaveAccountOptionsDto {
  @IsBoolean()
  @IsOptional()
  disclaimerChanged?: boolean;
  @IsNumber()
  @IsOptional()
  auto_pro_did_limit?: number;
  @IsNumber()
  @IsOptional()
  password_complexity?: number;
  @IsString()
  @IsOptional()
  additional_lead_field?: string;
  @IsString()
  @IsOptional()
  log_lead_changes?: string;
  @IsString()
  @IsOptional()
  multi_process?: string;
  @IsString()
  @IsOptional()
  multi_process_auto_dial?: string;
  @IsString()
  @IsOptional()
  exclude_from_revenue_report?: string;
  @IsString()
  @IsOptional()
  is_in_testbed?: string;
  @IsNumber()
  @IsOptional()
  sale_rep_id?: number;
  @IsNumber()
  @IsOptional()
  backup_sale_rep_id?: number;
  @IsNumber()
  @IsOptional()
  csm_rep_id?: number;
  @IsNumber()
  @IsOptional()
  backup_csm_rep_id?: number;
  @IsString()
  @IsOptional()
  disclaimer?: string;
  @IsString()
  @IsOptional()
  show_tos_on_agent_app?: string;
  @IsString()
  @IsOptional()
  preserve_log_expire_at?: string;
  @IsString()
  @IsOptional()
  preview_dial_restriction?: string;
  @IsString()
  @IsOptional()
  enable_sms_testing?: string;
  @IsString()
  @IsOptional()
  enable_overlay_matching?: string;
  @IsString()
  @IsOptional()
  enable_contact_email_validation?: string;
  @IsString()
  @IsOptional()
  enable_multi_factored_authentication?: string;
  @IsString()
  @IsOptional()
  attestation_level?: string;
  @IsString()
  @IsOptional()
  enable_debounce_sms?: string;
  @IsString()
  @IsOptional()
  enable_camp_reg_staging?: string;
  @IsString()
  @IsOptional()
  sms_inbound_redirect?: string;
  @IsString()
  @IsOptional()
  enable_iva_react_ui?: string;
  @IsString()
  @IsOptional()
  enable_ccid_remediation?: string;
  @IsString()
  @IsOptional()
  enable_dedicated_sms?: string;
  @IsString()
  @IsOptional()
  enable_password_rotation?: string;
  @IsNumber()
  @IsOptional()
  voso_ai_csm_id?: number;
  @IsString()
  @IsOptional()
  hopper_custom_field_order?: string;
  @IsString()
  @IsOptional()
  talkdesk_id?: string;
  // Account direct fields
  @IsString()
  @IsOptional()
  name?: string;
  @IsString()
  @IsOptional()
  company_name?: string;
  @IsString()
  @IsOptional()
  website?: string;
  @IsString()
  @IsOptional()
  default_caller_id?: string;
  @IsString()
  @IsOptional()
  default_gmt?: string;
  @IsString()
  @IsOptional()
  billing_production?: string;
  @IsString()
  @IsOptional()
  test_account?: string;
  @IsString()
  @IsOptional()
  status?: string;
  @IsString()
  @IsOptional()
  delinquent_at?: string;
  @IsString()
  @IsOptional()
  cluster_node?: string;
  @IsNumber()
  @IsOptional()
  security_compliance?: number;
  @IsNumber()
  @IsOptional()
  extend_delinquent_period?: number;
  @IsString()
  @IsOptional()
  address?: string;
  @IsString()
  @IsOptional()
  city?: string;
  @IsString()
  @IsOptional()
  state?: string;
  @IsString()
  @IsOptional()
  zipcode?: string;
  @IsString()
  @IsOptional()
  country?: string;
  @IsString()
  @IsOptional()
  default_audio_format?: string;
  @IsString()
  @IsOptional()
  migration_mode?: string;
  @IsString()
  @IsOptional()
  externally_managed_account?: string;
  @IsString()
  @IsOptional()
  demo_expired_at?: string;
}

export class UpdateAccountDto {
@ValidateNested()
@Type(() => SaveAccountOptionsDto)
  CurrentOptions: SaveAccountOptionsDto;
}



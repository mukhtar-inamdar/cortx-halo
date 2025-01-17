/*
 * CORTX-CSM: CORTX Management web.
 * Copyright (c) 2022 Seagate Technology LLC and/or its Affiliates
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 * For any questions about this software or licensing,
 * please email opensource@seagate.com.
 */
import { SgtDropdownOption } from "../SgtDropdown/SgtDropdown.model";

export interface SgtAdvanceSearchConfig {
  placeholder?: string;
  autoSearch?: boolean; // Search on type on primary search (not on advance search)
  initialSearch?: boolean; // Trigger the search with values in advance search filter config on load
  advanceForm?: SgtAdvanceFormField[];
}
export interface SgtAdvanceFormField {
  type: "textbox" | "dropdown" | "radio" | "date" | "checkbox";
  name: string;
  label: string;
  placeholder?: string;
  options?: SgtDropdownOption[];
  required?: boolean;
  editable?: boolean;
  value?: any;
}

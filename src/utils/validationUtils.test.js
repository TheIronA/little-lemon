import { 
  validateEmail, 
  validatePhone, 
  validateRequired,
  validateConfirmationCode
} from './validationUtils';

describe('Form Validation Utility Functions', () => {
  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      expect(validateEmail('user@example.com')).toBe(true);
      expect(validateEmail('name.surname@domain.co.uk')).toBe(true);
      expect(validateEmail('user-name@example.domain.com')).toBe(true);
      expect(validateEmail('user123@example.org')).toBe(true);
    });
    
    test('rejects invalid email addresses', () => {
      expect(validateEmail('')).toBe(false);
      expect(validateEmail('user@')).toBe(false);
      expect(validateEmail('user@domain')).toBe(false);
      expect(validateEmail('user.domain.com')).toBe(false);
      expect(validateEmail('@domain.com')).toBe(false);
      expect(validateEmail('user@.com')).toBe(false);
      expect(validateEmail('user space@domain.com')).toBe(false);
    });
  });
  
  describe('validatePhone', () => {
    test('validates correct phone numbers', () => {
      expect(validatePhone('1234567890')).toBe(true);      // 10 digits
      expect(validatePhone('123-456-7890')).toBe(true);    // dashes
      expect(validatePhone('(123) 456-7890')).toBe(true);  // parentheses
      expect(validatePhone('123 456 7890')).toBe(true);    // spaces
      expect(validatePhone('+1 123 456 7890')).toBe(true); // international
    });
    
    test('rejects invalid phone numbers', () => {
      expect(validatePhone('')).toBe(false);
      expect(validatePhone('123')).toBe(false);            // too short
      expect(validatePhone('abcdefghij')).toBe(false);     // not digits
      expect(validatePhone('12345678901234567')).toBe(false); // too long
    });
  });
  
  describe('validateRequired', () => {
    test('validates non-empty values', () => {
      expect(validateRequired('text')).toBe(true);
      expect(validateRequired('0')).toBe(true);
      expect(validateRequired(0)).toBe(true);
      expect(validateRequired(false)).toBe(true);
      expect(validateRequired([])).toBe(true);
      expect(validateRequired({})).toBe(true);
    });
    
    test('rejects empty values', () => {
      expect(validateRequired('')).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });
    
    test('rejects whitespace-only strings', () => {
      expect(validateRequired('   ')).toBe(false);
      expect(validateRequired('\t\n')).toBe(false);
    });
  });
  
  describe('validateConfirmationCode', () => {
    test('validates correct confirmation codes', () => {
      expect(validateConfirmationCode('LL-123456')).toBe(true);
      expect(validateConfirmationCode('LL-ABCDEF')).toBe(true);
      expect(validateConfirmationCode('LL-12AB34')).toBe(true);
    });
    
    test('rejects invalid confirmation codes', () => {
      expect(validateConfirmationCode('')).toBe(false);
      expect(validateConfirmationCode('123456')).toBe(false);       // missing prefix
      expect(validateConfirmationCode('LL123456')).toBe(false);     // missing hyphen
      expect(validateConfirmationCode('LL-12345')).toBe(false);     // too short
      expect(validateConfirmationCode('LL-1234567')).toBe(false);   // too long
      expect(validateConfirmationCode('XX-123456')).toBe(false);    // wrong prefix
      expect(validateConfirmationCode('LL-12345!')).toBe(false);    // invalid character
    });
  });
}); 